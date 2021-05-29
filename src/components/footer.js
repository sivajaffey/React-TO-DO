import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
function Footer() {
  return (
    <div className="s-to-do-footer">
            <Fab position="sticky" color="primary" aria-label="add">
                 <AddIcon />
            </Fab>
    </div>
  );
}

export default Footer;
