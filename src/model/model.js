import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect, useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React from 'react';
import { FormControl } from '@material-ui/core';
function Model(props) {
    const [id,setId] = useState(props.id);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const onClosing = () => {
        let returnValue = { 'title' : title, 'description':description, 'id': id, 'type':props.type};
        props.close(returnValue);
    }
  return (
    <div className="s-to-do-model">
        <Dialog
            open={props.open}
            onClose={()=>props.onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <FormControl>
            <DialogTitle id="alert-dialog-slide-title">
                <TextField id="title" label="Title" defaultValue={props.title} onChange={ (e) => setTitle(e.target.value)}/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    <TextareaAutosize
                        id="description"
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue={props.description}
                        onChange={ (e) => setDescription(e.target.value)}
                        />
                    </DialogContentText>
                </DialogContent>
                </FormControl>
            <DialogActions><ArrowBackIosIcon onClick={()=>onClosing()} /></DialogActions>
        </Dialog>
    </div>
  );
}

export default Model;
