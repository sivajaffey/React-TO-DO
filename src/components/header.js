import { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
    const [title,setTitle] = useState(props.title);
  return (
    <div className="s-to-do-header">
       <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;
