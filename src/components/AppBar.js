import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Example
                    </Typography>
                    <Button color="inherit"><Link style={{color: "red"}} to={"/"}>Home</Link></Button>
                </Toolbar>
            </AppBar>
            <h1>{"THE STEPS TO A PERFECT INFOGRAPHIC"}</h1>
            <p>{"1. Identify the audience for your infographic.\n" +
            "Collect your content and relevant data.\n" +
            "Choose your desired infographic template.\n" +
            "Download your template to PowerPoint.\n" +
            "Customize your infographic.\n" +
            "Include a footer with your sources and logo.\n" +
            "Add an embed code and Pinterest button, and publish it."}</p>
        </div>
    );
}