import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Icon,
  IconButton,
  Avatar
} from "@material-ui/core";
import styles from "../../theme/styles";

class ListShow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" style={{ padding: 10 }}>
        <Grid item xs={12}>
          <Paper className={classes.band}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={5}>
                <Grid container>
                  <Grid item xs={12} sm={2}>
                    <Avatar style={{ width: 30, height: 30 }}>
                      <Icon>cloud_queue</Icon>
                    </Avatar>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Typography className={classes.greenText} variant="h6">
                      spring-boot
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="caption" color="secondary">
                  STATUS
                </Typography>
                <Typography variant="subtitle2" className={classes.greenText}>
                  Running
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="caption" color="secondary">
                  REPLICA
                </Typography>
                <Typography variant="subtitle2">4</Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Grid container className={classes.addButtonContainer}>
                  <IconButton>
                    <Icon>arrow_forward_ios</Icon>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.disabledBand}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={5}>
                <Grid container>
                  <Grid item xs={12} sm={2}>
                    <Avatar style={{ width: 30, height: 30 }}>
                      <Icon>cloud_circle</Icon>
                    </Avatar>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Typography className={classes.disabled} variant="h6">
                      python
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="caption" color="secondary">
                  STATUS
                </Typography>
                <Typography variant="subtitle2" className={classes.disabled}>
                  Deleted
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="caption" color="secondary">
                  REPLICA
                </Typography>
                <Typography variant="subtitle2" className={classes.disabled}>
                  4
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Grid container className={classes.addButtonContainer}>
                  <IconButton>
                    <Icon>arrow_forward_ios</Icon>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ListShow);
