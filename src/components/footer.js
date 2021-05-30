import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Model from '../model/model';
import { useEffect, useState } from "react";
function Footer(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const onClosing = (value) => {
      setOpen(false);
      props.close(value);
    }
  return (
    <div className="s-to-do-footer">
            <Fab position="fixed" color="primary" aria-label="add">
                 <AddIcon onClick={handleClickOpen}/>
            </Fab>
        <Model close={onClosing} open={open} title="" description="" id="" type="add"/>
    </div>
  );
}

export default Footer;
