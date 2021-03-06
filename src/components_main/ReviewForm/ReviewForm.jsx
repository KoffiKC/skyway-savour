// modal things
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RateReviewIcon from '@mui/icons-material/RateReview';

// star rating things
import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ReviewForm({details}) {
    // handle model open and close
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // handle rating functionality
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [review, setReview] = React.useState('');
    // this will allow users to POST the review to the database
    const dispatch = useDispatch()
    const Details = details[0]

    const handleClick = () => {
        console.log('this will submit the form weee!');
        console.log(value, review);
        dispatch({
            type: 'ADD_REVIEW',
            payload: {
                location_id: Details.id,
                rating: value,
                review: review
            }
        })
        handleClose()
    }

    console.log('this is in the review form, i have bo clue whe itll console lol', Details);
    return (
        <div>
            {/* <Button onClick={handleOpen}>Add Review</Button> */}
            <Button onClick={handleOpen} size="large" color="secondary" endIcon={<RateReviewIcon />}>ADD review</Button>
            {/* <button onClick={handleOpen}>Add Review</button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        How was your experience at {Details?.name}?
                    </Typography>
                    <input 
                    type="text" 
                    placeholder='look at me im an input'
                    onChange={(e)=> setReview(e.target.value)} />
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                        {/* rating thing weeeeeeeee */}
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={1}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>

                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <button onClick={handleClick}>POST</button>
                    <button onClick={handleClose}>CANCEL</button>
                </Box>
            </Modal>
        </div>
    );
}
