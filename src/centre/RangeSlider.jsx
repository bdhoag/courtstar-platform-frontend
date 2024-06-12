import React, { useState } from 'react';
import { Box, Slider, TextField, Button, InputAdornment, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
    width: '130px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'orange',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'orange',
        },
    },
    '& .MuiInputBase-input': {
        paddingRight: '10px',
        fontSize: '14px', // Thay đổi font-size ở đây
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        '&[type=number]': {
            '-moz-appearance': 'textfield',
        },
    },
});



const RangeSlider = ({ onApply, onChange }) => {
    const [range, setRange] = useState([0, 500000]);
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [minFocused, setMinFocused] = useState(false);
    const [maxFocused, setMaxFocused] = useState(false);
    const [minVndVisible, setMinVndVisible] = useState(false); // Trạng thái hiển thị vnd cho ô Min
    const [maxVndVisible, setMaxVndVisible] = useState(false); // Trạng thái hiển thị vnd cho ô Max

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
        onChange(newValue);
        setMinValue(newValue[0]);
        setMaxValue(newValue[1]);
        
    };

    const handleMinInputChange = (event) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);
        setMinValue(value);
        setRange([value, range[1]]);
        
        
    };

    const handleMaxInputChange = (event) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);
        setMaxValue(value);
        setRange([range[0], value]);
    };

    const handleClear = () => {
        setRange([0, 500000]);
        setMinValue('');
        setMaxValue('');
    };

    const handleApply = () => {
        alert(`Applied range: ${range[0]} - ${range[1]}`);
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 500000,
            label: '5 trăm',
        },
    ];

    return (
        <Box sx={{ width: 300, padding: 2 }}>
            <Slider
                value={range}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                max={500000}
                step={20000}
                marks={marks}
                valueLabelFormat={(value) => {
                    if (value === 0) {
                        return '0';
                    } else if (value === 500000) {
                        return '5 trăm';
                    } else {
                        return value;
                    }
                }}
                sx={{ color: '#2B5A50' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '-15px' }}>
                <Box sx={{ marginInline: '10px' }}>
                    <StyledTextField
                        label={<Typography variant="body1" style={{ fontSize: '13px' }}>MIN</Typography>}
                        type="number"
                        value={minValue}
                        onChange={handleMinInputChange}
                        onFocus={() => {
                            setMinFocused(true);
                            setMinVndVisible(true); // Hiển thị vnd khi ô Min được focus
                        }}
                        onBlur={() => {
                            setMinFocused(false);
                            if (minValue === '') setMinVndVisible(false); // Ẩn vnd khi mất focus khỏi ô Min và ô không có giá trị
                        }}
                        InputProps={{
                            inputProps: { min: 0, max: 500000 },
                            endAdornment: (minFocused && minVndVisible) && <InputAdornment position="end">vnd</InputAdornment>, // Chỉ hiển thị khi ô được focus và có giá trị
                        }}
                    />
                </Box>
                <Box sx={{
                    marginInline: '5px',
                    width: '10px',
                    height: '20%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    lineHeight: '20%',
                    margin: 'auto',
                }}>
                    <Typography variant="body1">-</Typography>
                </Box>
                <Box sx={{ marginInline: '10px' }}>
                    <StyledTextField
                        label={<Typography variant="body1" style={{ fontSize: '13px' }}>MAX</Typography>}
                        type="number"
                        value={maxValue}
                        onChange={handleMaxInputChange}
                        onFocus={() => {
                            setMaxFocused(true);
                            setMaxVndVisible(true); // Hiển thị vnd khi ô Max được focus
                        }}
                        onBlur={() => {
                            setMaxFocused(false);
                            if (maxValue === '') setMaxVndVisible(false); // Ẩn vnd khi mất focus khỏi ô Max và ô không có giá trị
                        }}
                        InputProps={{
                            inputProps: { min: 0, max: 500000 },
                            endAdornment: (maxFocused && maxVndVisible) && <InputAdornment position="end">vnd</InputAdornment>, // Chỉ hiển thị khi ô được focus và có giá trị
                        }}
                    />
                </Box>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Button variant="outlined" onClick={handleClear} sx={{ marginRight: 1, color: '#fff', borderColor: '#ff0000', backgroundColor: '#ff0000', '&:hover': { backgroundColor: '#ff0000', borderColor: '#ff0000' } }}>Cancel</Button>

                <Button variant="outlined" onClick={handleApply} sx={{ marginLeft: 1, color: '#fff', borderColor: '#2B5A50', backgroundColor: '#2B5A50', '&:hover': { backgroundColor: '#2B5A50', borderColor: '#2B5A50' } }}>Apply</Button>

            </Box>
        </Box>
    );
};

export default RangeSlider;

