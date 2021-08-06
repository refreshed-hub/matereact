import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Check } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    }
  }
})

function StyleBtn(){
  const classes = useStyles();
  return <Button classnName={classes.root}>Testing button styles</Button>
}

function Checkboxer(){
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel 
    control={
      <Checkbox
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      onchange={(e) => setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
      />
    }
    label = "Test"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <StyleBtn />
        <TextField 
        variant="filled"
        color="primary"
        type="email"
        label="Mail"
        placeholder="mail@mail.com"
        />
        <Checkboxer />
        <ButtonGroup variant="contained">
            <Button 
            startIcon={<SaveIcon />} 
            color="primary" 
            size="large"
            >
            Save
            </Button>
            <Button 
            startIcon={<DeleteIcon />} 
            color="secondary"
            size="large">
              Exit without saving
            </Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
