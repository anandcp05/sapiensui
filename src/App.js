import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  FormControl,
  Select,
  Box,
  InputLabel
} from "@material-ui/core";

import { Menu as MenuIcon, Add as AddIcon } from "@material-ui/icons";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";

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

const base_url = "https://sapienstest.herokuapp.com"
export default function App() {
  const classes = useStyles();
  const [themes, setThemes] = useState([]);
  const [theme, setTheme] = useState("");


  useEffect(async () => {
    const themes = await axios.get(
      `${base_url}/themes`
    );
    setThemes(themes.data.themes);
    const selectedTheme = await axios.get(
      `${base_url}/user/theme/1`
    );
    setTheme(selectedTheme.data.theme.theme_id);
  }, []);

  const handleChange = async (event) => {
    setTheme(event.target.value);
    const selectedTheme = await axios.put(
      `${base_url}/user/theme/1`,
      {
        "themeId": event.target.value
      }
    );
    console.log(selectedTheme)
  };

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
          <FormControl className={classes.theme} variant="standard">
            <InputLabel>Theme</InputLabel>
            <Select value={theme} label="Theme" onChange={handleChange}>
              {themes.map((theme) => {
                return <MenuItem key={theme.id} value={theme.id}>{theme.type}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
