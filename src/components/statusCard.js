import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({

    root: {
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
        },
    },
    media: {
        height: 56,
        paddingTop: "56.25%", // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function StatusCard() {
    const classes = useStyles();
    return (
        <Grid
            className={classes.root}
            container
            justify="center"
            alignItems="center"
        >
            <Card elevation={8}>
                <CardHeader
                    avatar={<Avatar alt="acp" src={"myImg"} />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Anandkumar C P"
                    subheader="@cp"
                />
                <CardMedia
                    className={classes.media}
                    image={"backImg2"}
                    title="cp"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Sapiens Interview
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
