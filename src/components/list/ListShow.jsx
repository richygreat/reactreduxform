import React, { Component } from "react";
import { withStyles, Paper, Grid, Typography, Button } from "@material-ui/core";
import styles from "../../theme/styles";

class ListShow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <Paper className={classes.band}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={3}>
              <Typography className={classes.greenText} variant="h6">
                spring-boot
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={4}>
              <Grid container className={classes.addButtonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.bandButton}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.bandButton}
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.band}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={3}>
              <Typography className={classes.greenText} variant="h6">
                react-js
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
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
              <Typography variant="subtitle2">3</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container className={classes.addButtonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.bandButton}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.bandButton}
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={[classes.band, classes.disabledBand]}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" className={classes.disabled}>
                python
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={4}>
              <Grid container className={classes.addButtonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  disabled
                  className={classes.bandButton}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.bandButton}
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ListShow);
