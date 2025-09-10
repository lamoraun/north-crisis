import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

interface VerticalGaugeProps {
    value: number;
    max: number;
    label: string;
    color: string;
}

const VerticalGauge: React.FC<VerticalGaugeProps> = ({
    value,
    max,
    label,
    color,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const percentage = Math.min((value / max) * 100, 100);

    const height = isMobile ? 200 : isTablet ? 250 : 300;
    const width = isMobile ? 60 : isTablet ? 70 : 80;
    const fontSize = isMobile ? '0.9rem' : '1.1rem';

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: isMobile ? 1 : 2
        }}>
            <Typography
                variant="h6"
                sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 'bold',
                    fontSize,
                    textAlign: 'center'
                }}
            >
                {label.split(' ')[0]}<br />{label.split(' ')[1]}
            </Typography>

            <Box sx={{
                position: 'relative',
                height,
                width,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid #333',
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: `${percentage}%`,
                        backgroundColor: color,
                        background: `linear-gradient(0deg, ${color} 0%, ${color}80 100%)`,
                        transition: 'height 0.5s ease',
                    }}
                />

                {/*{Array.from({ length: max + 1 }, (_, i) => i).map((mark) =>*/}
                {/*    mark % 1 === 0 ? (*/}
                {/*        <Box*/}
                {/*            key={mark}*/}
                {/*            sx={{*/}
                {/*                position: 'absolute',*/}
                {/*                left: 0,*/}
                {/*                right: 0,*/}
                {/*                bottom: `${(mark / max) * 100}%`,*/}
                {/*                height: '1px',*/}
                {/*                backgroundColor: mark === value ? color : 'rgba(255,255,255,0.1)',*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    ) : null*/}
            </Box>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                        color: 'primary.light',
                        fontWeight: 'bold',
                        textShadow: '0 0 10px rgba(0, 172, 193, 0.5)',
                        lineHeight: 1
                    }}
                >
                    {value}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        mt: 0.5,
                        fontSize: isMobile ? '0.8rem' : '0.9rem'
                    }}
                >
                    / {max}
                </Typography>
            </Box>
        </Box>
    );
};

export default VerticalGauge;