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
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Main
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to={"/checklist"}>Grocery List</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/snackBar"}>Snack Bar</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/comp"}>How to Make an Infographic</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/appBar"}>Infographic Example</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/subscription"}>Magazine Subscription</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/textfield"}> Info Form</Link></MenuItem>
            </Menu>
        </div>
    );
}