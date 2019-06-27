import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import handyicon from "../../img/handyicon.png";

function Footers() {
    return <Typography variant="body2" color="textSecondary" />;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    // main: {
    //   marginTop: theme.spacing(8),
    //   marginBottom: theme.spacing(2),
    // },
    footer: {
        padding: theme.spacing(2),
        marginTop: "auto",
        backgroundColor: "white"

        // border: "1px solid red"
    },
    img: {
        paddingLeft: "100px"
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    {/* <img src = {handyicon} alt ="handyicon" className={classes.img}/> */}

                    <Typography variant="body1" align="center">
                        <img src={handyicon} alt="handyicon" />
                        Copyright © 2019 Handy. All rights reserved.
                    </Typography>
                    <Footers />
                </Container>
            </footer>
        </div>
    );
}
