import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon, Add as AddIcon } from "@material-ui/icons";
import AccessAlarmIcon from '@material-ui/icons';
import {
    makeStyles,
} from "@material-ui/core/styles";
import { withStyles, fade } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from '@material-ui/core/Tooltip';
import ToggleButton from "@material-ui/lab/ToggleButton";
import MuiToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import light from '../light.png';
import dark from '../dark.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    paper: {
        marginTop: "1rem",
        padding: "1rem"
    },
    theme: {
        background: "white",
        width: 100
    }
}));

const ToggleButtonGroup = withStyles((theme) => ({
    groupedVertical: {
        "&&.Mui-selected + &&.Mui-selected": {
            borderLeft: `1px solid ${fade(theme.palette.action.active, 0.12)}`,
            borderTop: 0,
            marginTop: 0
        }
    }
}))(MuiToggleButtonGroup);

export default function Header({ toggleDark, settoggleDark }) {
    const classes = useStyles();
    const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

    const setToggleDark = () => {
        settoggleDark(!toggleDark);
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Sapiens
                    </Typography>
                    <Tooltip title={toggleDark ? "Light Theme" : "Dark Theme"}>
                        <Switch
                            checked={toggleDark}
                            onChange={setToggleDark}
                            name="toggleDark"
                            color="default"
                        />
                    </Tooltip>
                    {toggleDark ?
                        <img width="30" height="30" src={dark} alt="dark" /> :
                        <img width="30" height="30" src={light} alt="lite" />
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
