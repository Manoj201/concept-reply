import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Typography } from 'app/shared/components'
import RoomStaticsCard from 'app/modules/dashboard/components/RoomStaticsCard.component'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#972dba',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  content: {
    padding: 10,
  }

}));


const BuildingCard = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h5" color="secondary" weight="bold" brigtness="light" >{props.buildingName}</Typography>
      </div>
      <div className={classes.content}>
        <Grid container spacing={2}>
          {props.rooms && props.rooms.map(room => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <RoomStaticsCard room={room.name} backgroundColor={room.widgetColor} value={room.value} status={room.status} />
              </Grid>
            );
          })}

        </Grid>
      </div>
    </Paper>
  );
};

export default React.memo(BuildingCard);
