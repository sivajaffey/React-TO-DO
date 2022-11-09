import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect, useState } from "react";
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { FormControl } from '@material-ui/core';

function Model(props) {
    const [title,setTitle] = useState(props.title);
    const [description,setDescription] = useState(props.description);
    const onClosing = (event) => {
        if(event == 'close') {
            props.close('');
            return false;
        }
        let returnValue;
        let title1 = title;
        let description1 = description;
        if(title1 == undefined) {
            title1 = props.title;
        } else {
            title1 = title;
        }
        if(description1 == undefined) {
            description1 = props.description;
        } else {
            description1 = description;
        }
        if(props.type == "add") {
            returnValue = { 'title' : title1, 'description':description1, 'id': props.id, 'type':'add'};
        } else {
            returnValue = { 'title' : title1, 'description':description1, 'id': props.id, 'type':'edit'};
        }
        
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
                    <TextField
                        id="description"
                        label="Description"
                        placeholder="Description"
                        defaultValue={props.description}
                        onChange={ (e) => setDescription(e.target.value)}
                        multiline
                        />
                    </DialogContentText>
                </DialogContent>
                </FormControl>
            <DialogActions><SaveIcon onClick={()=>onClosing('save')} /><CloseIcon onClick={()=>onClosing('close')} /></DialogActions>
        </Dialog>
    </div>
  );
}

export default Model;
