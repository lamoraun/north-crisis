import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Fab,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { Help } from '@mui/icons-material';
import RulesModal from './RulesModal';
import CountryCard from './CountryCard';
import VerticalGauge from './VerticalGauge';
import { subscribeToStatesData, subscribeToGlobalData } from '../services/dbService';
import type { StateData } from '../services/dbService';

const CrisisPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [states, setStates] = useState<StateData[]>([]);
    const [globalData, setGlobalData] = useState({ maubuThreat: 0, imperialWill: 0 });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const unsubscribeStates = subscribeToStatesData(setStates);
        const unsubscribeGlobal = subscribeToGlobalData(setGlobalData);

        return () => {
            unsubscribeStates();
            unsubscribeGlobal();
        };
    }, []);

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)'
        }}>
            {/* Первый экран - Кризис */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #0c0c0c 0%, #1c1c1c 100%)',
                    px: isMobile ? 2 : 0
                }}
            >
                {/* Декоративные изображения по бокам */}
                <Box
                    component="img"
                    src="/images/left-decor.png"
                    alt=""
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: isMobile ? '40%' : '70%',
                        opacity: 0.7,
                        display: { xs: 'none', md: 'block' },
                        zIndex: 1
                    }}
                />
                <Box
                    component="img"
                    src="/images/right-decor.png"
                    alt=""
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: isMobile ? '40%' : '70%',
                        opacity: 0.7,
                        display: { xs: 'none', md: 'block' },
                        zIndex: 1
                    }}
                />

                <Container
                    maxWidth="lg"
                    sx={{
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: 'primary.main',
                            textAlign: 'center',
                            mb: isMobile ? 4 : 6,
                            fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
                            fontWeight: 'bold',
                            textShadow: '0 0 15px rgba(0, 172, 193, 0.5)',
                            letterSpacing: '0.1em',
                            lineHeight: 1.2
                        }}
                    >
                        КРИЗИС СЕВЕРА
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        flexDirection: 'row',
                        gap: isMobile ? 3 : 6,
                        mb: isMobile ? 4 : 6,
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <VerticalGauge
                            value={globalData.imperialWill}
                            max={20}
                            label="Имперское Единство"
                            color="#00acc1"
                        />

                        <VerticalGauge
                            value={globalData.maubuThreat}
                            max={20}
                            label="Угроза Маубу"
                            color="#8d6e63"
                        />
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        Тёмные времена наступили для севера Ламорана. Судьба Хоатрии висит на волоске,
                        и только единство перед лицом общей угрозы может спасти её земли.
                    </Typography>
                </Container>
            </Box>

            {/* Второй экран - Страны */}
            <Box sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: isMobile ? 4 : 8,
                px: isMobile ? 2 : 0
            }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            textAlign: 'center',
                            mb: isMobile ? 4 : 6,
                            color: 'primary.main',
                            textShadow: '0 0 12px rgba(0, 172, 193, 0.3)',
                            fontSize: isMobile ? '1.8rem' : '2.5rem'
                        }}
                    >
                        СИЛЫ ИМПЕРИИ
                    </Typography>

                    <Box sx={{
                        alignItems: 'center',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gap: isMobile ? 2 : 3,
                        justifyContent: 'center'
                    }}>
                        {states.map((country) => (
                            <Box
                                key={country.id}
                                sx={{
                                    display: 'flex',
                                    minHeight: isMobile ? 280 : 320,
                                    height: '100%',
                                    justifyContent: 'center'
                                }}
                            >
                                <CountryCard country={country} />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Кнопка помощи */}
            <Fab
                color="primary"
                aria-label="help"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    width: isMobile ? 48 : 56,
                    height: isMobile ? 48 : 56,
                    backgroundColor: '#00acc1',
                    '&:hover': {
                        backgroundColor: '#00838f',
                        boxShadow: '0 0 15px rgba(0, 172, 193, 0.4)'
                    },
                    zIndex: 1000
                }}
                onClick={() => setIsModalOpen(true)}
            >
                <Help sx={{ fontSize: isMobile ? 24 : 28 }} />
            </Fab>

            <RulesModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </Box>
    );
};

export default CrisisPage;