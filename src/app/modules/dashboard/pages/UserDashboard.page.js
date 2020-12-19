import React from "react";
import { Grid } from "@material-ui/core";

import BuildingCard from 'app/modules/dashboard/components/BuildingCard.component'

const UserDashboardPage = (props) => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <BuildingCard buildingName="Concept Tower" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <BuildingCard buildingName="Reply Square" />
      </Grid>
    </Grid>
  );
};

export default React.memo(UserDashboardPage);
