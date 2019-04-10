import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Avatar,
  Icon,
  Typography,
  Chip,
  Paper,
  Button,
  Divider,
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import styles from "../../theme/styles";
import ListShow from "../list/ListShow";
import DashboardStats from "../DashboardStats";

class ViewItem extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item xs={12} sm={11} md={11} lg={8}>
          <div style={{ display: "flex", marginBottom: 20 }}>
            <Avatar style={{ width: 50, height: 50 }}>
              <Icon>cloud</Icon>
            </Avatar>
            <Typography
              className={classes.pageTitle}
              style={{ marginLeft: 10 }}
              variant="h4"
            >
              spring-boot
            </Typography>
            <Chip
              style={{ marginTop: 5, marginLeft: 10 }}
              className={classes.greenBadge}
              label="RUNNING"
              icon={<Icon className={classes.greenText}>done</Icon>}
            />
          </div>
          <Grid container style={{ marginBottom: 20 }}>
            <Grid item xs={12} sm={6} lg={3}>
              <DashboardStats
                label="Projects"
                subtitle="Sub Projects"
                iconName="cloud_circle"
                addLink="/cluster/new/"
                viewLink="/cluster"
                count="1"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <DashboardStats
                label="Users"
                subtitle="Active users"
                iconName="person"
                addLink="/user/new/"
                viewLink="/user"
                count="5"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <DashboardStats
                label="Teams"
                subtitle="Active teams"
                iconName="people"
                addLink="/team/new/"
                viewLink="/team"
                count="10"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <DashboardStats
                label="Services"
                subtitle="Microservices"
                iconName="storage"
                addLink="/service/new/"
                viewLink="/service"
                count="8"
              />
            </Grid>
          </Grid>
          <Paper className={classes.band}>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  className={classes.headerBandTitle}
                  variant="caption"
                  color="secondary"
                >
                  STARTERS
                </Typography>
                <Typography variant="subtitle2">
                  spring-boot-starter-web
                </Typography>
                <Typography variant="subtitle2">
                  spring-boot-starter-amqp
                </Typography>
                <Typography variant="subtitle2">
                  spring-boot-starter-jpa
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  className={classes.headerBandTitle}
                  variant="caption"
                  color="secondary"
                >
                  ACTIONS
                </Typography>
                <Grid container>
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
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          </Paper>

          <div className={classes.root}>
            <AppBar className={classes.pageNavBar} position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="FAVOURITES" />
                <Tab label="RESOURCES" />
              </Tabs>
            </AppBar>
            {value === 0 && <ListShow />}
            {value === 1 && <div>Resources</div>}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ViewItem);
