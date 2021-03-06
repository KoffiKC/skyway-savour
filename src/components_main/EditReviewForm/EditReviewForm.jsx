// modal things

// importing all can potential slow things down
import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// star rating things
import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';


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

export default function EditReviewForm({Review}) {
    // handle model open and close
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // handle rating functionality
    const [value, setValue] = React.useState(Review.rating);
    const [hover, setHover] = React.useState(-1);
    const [review, setReview] = React.useState(Review.review);
    // this will allow users to POST the review to the database
    const dispatch = useDispatch()


    const handleClick = () => {
        console.log('this will submit the form weee!', value, review);
        dispatch({
            type: 'UPDATE_REVIEW',
            payload: {
                user_id: Review.user_id,
                review_id: Review.id,
                rating: value,
                review: review
            }
        })
        handleClose()
    }

    // console.log('the review', Review);
    return (
        <div>
            <Button color='secondary' onClick={handleOpen}>Edit Review</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit an existing review!
                    </Typography>
                    <input 
                    type="text" 
                    placeholder='look at me im an input'
                    value={review}
                    onChange={(e)=> setReview(e.target.value)}/>
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
