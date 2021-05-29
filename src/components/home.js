import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useEffect, useState } from "react";
// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });
function Home() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <div className="s-to-do-home">
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
            <Typography >s</Typography>
            <DeleteIcon />
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    here is the description
                </Typography>
            <EditIcon onClick={handleClickOpen} />
            </AccordionDetails>
        </Accordion>
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">title</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        this is the description
                    </DialogContentText>
                </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    </div>
  );
}

export default Home;
