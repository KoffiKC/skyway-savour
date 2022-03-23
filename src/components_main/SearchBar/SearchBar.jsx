import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {

    const handleClick =()=> {
        console.log('woohooo!');
    }


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '45ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                />
                <button onClick={handleClick}>Search</button>
            </div>
        </Box>
    );
}

export default SearchBar