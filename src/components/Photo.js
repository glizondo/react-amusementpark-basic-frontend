import Dialog from "@mui/material/Dialog";
import React, { useState } from 'react';


function Photo(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(open => !open);

    return (
        <div className="card">
            <img src={props.image} onClick={handleOpen} className="card--image" />
            <Dialog open={open} onClose={handleOpen}>
                <img className="photo-zoom"src={props.image}></img>
            </Dialog>
            <div className="card--title">
                <span>{props.location}</span>
            </div>
            <p className="card--stats">{props.date}</p>
        </div>
    )
}

export default Photo;