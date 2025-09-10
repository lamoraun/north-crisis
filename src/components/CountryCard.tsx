import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, useTheme, useMediaQuery } from '@mui/material';
import Gauge from './Gauge';

interface CountryData {
    id: string;
    militaryPower: number;
    politicalWeight: number;
    internalStability: number;
}

interface CountryCardProps {
    country: CountryData;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const getCountryName = (id: string) => {
        const names: { [key: string]: string } = {
            brabermein: 'Брабермейн',
            barvaria: 'Барвария',
            eurabia: 'Еврабия',
            edildor: 'Эдильдор',
            mauubu: 'Маубу'
        };
        return names[id] || id;
    };

    const getFlagPath = (id: string) => {
        const flags: { [key: string]: string } = {
            brabermein: '/flags/brabermein-flag.png',
            barvaria: '/flags/barvaria-flag.png',
            eurabia: '/flags/eurabia-flag.png',
            edildor: '/flags/edildor-flag.png',
            mauubu: '/flags/mauubu-flag.png'
        };
        return flags[id] || '/flags/default-flag.png';
    };

    return (
        <Card
            sx={{
                height: '100%',
                minHeight: isMobile ? 280 : 320,
                transition: 'all 0.3s ease',
                background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
                }
            }}
        >
            <CardContent sx={{
                p: isMobile ? 2 : 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: 270
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: isMobile ? 2 : 3
                }}>
                    <Avatar
                        src={getFlagPath(country.id)}
                        sx={{
                            width: isMobile ? 50 : 60,
                            height: isMobile ? 35 : 42,
                            mr: isMobile ? 1.5 : 2,
                            borderRadius: 1,
                            backgroundColor: 'transparent'
                        }}
                        variant="square"
                    />
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        component="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: isMobile ? '1.1rem' : '1.25rem',
                            flex: 1
                        }}
                    >
                        {getCountryName(country.id)}
                    </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Gauge
                        value={country.militaryPower}
                        max={10}
                        label="Военная мощь"
                        color="#d32f2f"
                        height={isMobile ? 8 : 10}
                    />

                    <Gauge
                        value={country.politicalWeight}
                        max={10}
                        label="Политический вес"
                        color="#1976d2"
                        height={isMobile ? 8 : 10}
                    />

                    <Gauge
                        value={country.internalStability}
                        max={10}
                        label="Внутренняя стабильность"
                        color="#2e7d32"
                        height={isMobile ? 8 : 10}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default CountryCard;