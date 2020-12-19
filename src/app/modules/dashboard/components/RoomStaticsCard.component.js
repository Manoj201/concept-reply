import React from "react";
import { Paper, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Typography } from 'app/shared/components'

const switchTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#079421"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: props => props.backgroundColor || '#f0b98d',
    padding: 5,
  },
  card: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  roomheader: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }
}));



const RoomStaticsCard = (props) => {
  const classes = useStyles(props);
  const [status, setStatus] = React.useState(props.status);

  const handleChange = (event) => {
    setStatus(event.target.checked);
  };

  return (
    <Paper className={classes.root}>
      <div class={classes.card}>
        <div class={classes.roomheader}>
          <Typography variant="body2" weight="bold" size="md" >Room {props.room}</Typography>
          <Typography variant="body2" size="sm" weight="bold">Light status</Typography>
        </div>

        <Typography variant="body2" weight="bold" size="md" >{props.value} %</Typography>
        <ThemeProvider theme={switchTheme}>
          <Switch
            checked={status}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'checkbox' }}
            color="primary"
          />
        </ThemeProvider>
      </div>


    </Paper>
  );
};

export default React.memo(RoomStaticsCard);
