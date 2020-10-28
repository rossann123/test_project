import {Link} from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{backgroundColor:"red", width:"120px", textAlign:"center"}}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Navigation
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to={"/CoolPerson"}>Cool Person</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/form"}>Form</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/firePage"}>Song Page</Link></MenuItem>
            </Menu>
        </div>
    );
}
