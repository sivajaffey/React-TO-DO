import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
  return (
    <div className="s-to-do-header">
       <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;
