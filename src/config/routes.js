import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Model from '../shared/model';
import { useEffect, useState } from "react";
import { Provider } from 'react-redux'
function Routes() {
    // const [open, setOpen] = useState(false);
    // const [title,setTitle] = useState();
    // const [description, setDescription] = useState();
    // const [id, setId] = useState();

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    // const onClosing = (value) => {
    //   setOpen(false);
    //   props.close(value);
    // }
  return (
    <div className="s-to-do-footer">
            <Fab position="fixed" color="primary" aria-label="add">
                 <AddIcon onClick={handleClickOpen}/>
            </Fab>
        <Model close={onClosing} open={open} title={title} description={title} id={id} type="add"/>
    </div>
  );
}

export default Footer;
