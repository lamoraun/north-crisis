import React from 'react';
import { Box, Typography, LinearProgress, useTheme, useMediaQuery } from '@mui/material';

interface GaugeProps {
    value: number;
    max: number;
    label: string;
    color: string;
    height?: number;
    showValue?: boolean;
}

const Gauge: React.FC<GaugeProps> = ({
    value,
    max,
    label,
    color,
    height = 8,
    showValue = true
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const percentage = (value / max) * 100;

    return (
        <Box sx={{ mb: isMobile ? 1.5 : 2 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1
            }}>
                <Typography
                    variant="body2"
                    fontWeight="medium"
                    sx={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}
                >
                    {label}
                </Typography>
                {showValue && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: isMobile ? '0.75rem' : '0.85rem' }}
                    >
                        {value}/{max}
                    </Typography>
                )}
            </Box>
            <LinearProgress
                variant="determinate"
                value={percentage > 100 ? 100 : percentage}
                sx={{
                    height,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: color,
                        borderRadius: 1,
                    },
                }}
            />
        </Box>
    );
};

export default Gauge;
