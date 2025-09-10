import {
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    onSnapshot,
    QuerySnapshot
} from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { db } from "../firebase";

export interface StateData {
    militaryPower: number;
    politicalWeight: number;
    internalStability: number;
    id: string;
}

export interface GlobalData {
    maubuThreat: number;
    imperialWill: number;
}

export const statesCollection = collection(db, "states");

export const getStatesData = async (): Promise<StateData[]> => {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(statesCollection);
    const statesList: StateData[] = [];
    querySnapshot.forEach((doc) => {
        if (doc.id !== 'crisis') {
            statesList.push({ id: doc.id, ...doc.data() } as StateData);
        }
    });
    return statesList;
};

export const subscribeToStatesData = (callback: (states: StateData[]) => void) => {
    return onSnapshot(statesCollection, (querySnapshot) => {
        const statesList: StateData[] = [];
        querySnapshot.forEach((doc) => {
            if (doc.id !== 'crisis') {
                statesList.push({ id: doc.id, ...doc.data() } as StateData);
            }
        });
        callback(statesList);
    });
};

export const updateStateData = async (stateId: string, newData: Partial<StateData>) => {
    const stateDocRef = doc(db, "states", stateId);
    await updateDoc(stateDocRef, newData);
};

const crisisDocRef = doc(db, "states", "crisis");

export const getGlobalData = async (): Promise<GlobalData> => {
    const docSnap = await getDoc(crisisDocRef);
    if (docSnap.exists()) {
        return docSnap.data() as GlobalData;
    } else {
        throw new Error("Crisis document not found!");
    }
};

export const subscribeToGlobalData = (callback: (data: GlobalData) => void) => {
    return onSnapshot(crisisDocRef, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data() as GlobalData);
        }
    });
};

export const updateGlobalData = async (newData: Partial<GlobalData>) => {
    await updateDoc(crisisDocRef, newData);
};
