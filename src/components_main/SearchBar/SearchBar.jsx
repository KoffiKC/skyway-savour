
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {

    const dispatch = useDispatch()

    const [term, setTerm] = useState('')

    const handleClick = (term) => {
        console.log('woohooo!', term);
        dispatch({
            type: 'RUN_SEARCH',
            payload: term
        })
        setTerm('')
    }


    return (
        <div >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { 
                        m: 0, 
                        width: '44.5ch', 
                        bgcolor: 'lightblue',
                        border: '2px solid blue',
                        borderRadius: '30px',
                    },
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
                        onChange={(e) => handleClick(e.target.value)}
                        // sx={{borderRadius: '30px'}}
                    />
                    {/* <button onClick={handleClick}>Search</button> */}
                </div>
            </Box>
        </div>
    );
}

export default SearchBar