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
  createTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { purple, green } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import StatusCard from "./components/statusCard";
import Switch from "@material-ui/core/Switch";
import Header from "./components/header"



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
  const [theme, setTheme] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [toggleDark, settoggleDark] = useState(false);
  //callAPI()
  const themeSecondary = createTheme({
    palette: toggleDark ? {
      primary: purple,
      secondary: green,
      type: "dark",
    } : {
      type: "light",
    },
    spacing: 8
  });

  useEffect(async () => {
    const themes = await axios.get(
      `${base_url}/themes`
    );
    setThemes(themes.data.themes);
    const selectedTheme = await axios.get(
      `${base_url}/user/theme/1`
    );
    setTheme(selectedTheme.data.theme.theme_id);
    settoggleDark(selectedTheme.data.theme.theme_id == 1 ? false : true);
    setIsLoading(false)
  }, []);

  const setToggleDark = async () => {
    settoggleDark(!toggleDark);
    const selectedTheme = await axios.put(
      `${base_url}/user/theme/1`,
      {
        "themeId": toggleDark ? 1 : 2
      }
    );
    console.log(selectedTheme)
  }

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
    <MuiThemeProvider theme={themeSecondary}>
      <CssBaseline />
      <div className="App">
        {isLoading ?
          <div>Page Loading</div>
          :
          <>
            <Header toggleDark={toggleDark}
              settoggleDark={setToggleDark} />
            <StatusCard />
          </>
        }

      </div>
    </MuiThemeProvider>
  );
}
