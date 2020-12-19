import React from "react";
import { Grid } from "@material-ui/core";

import BuildingCard from 'app/modules/dashboard/components/BuildingCard.component'

import data from '../data'

const UserDashboardPage = (props) => {

  return (
    <Grid container justify="center" spacing={3}>
      {data.map(building => <Grid item xs={12} sm={12} md={12} lg={12}>
        <BuildingCard buildingName={building.name} rooms={building.rooms} />
      </Grid>)}

    </Grid>
  );
};

export default React.memo(UserDashboardPage);
