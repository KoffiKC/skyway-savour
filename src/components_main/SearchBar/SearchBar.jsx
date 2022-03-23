
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {

    const dispatch = useDispatch()

    const [term, setTerm] = useState('')

    const handleClick =()=> {
        console.log('woohooo!', term);
        dispatch({
            type: 'RUN_SEARCH',
            payload: term
        })
        setTerm('')
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
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button onClick={handleClick}>Search</button>
            </div>
        </Box>
    );
}

export default SearchBar