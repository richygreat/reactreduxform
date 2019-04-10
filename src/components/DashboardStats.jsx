import React from "react";

import styles from "../theme/styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Badge,
  Icon,
  CardActions,
  Button,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

class DashboardStats extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 5 }}>
        <Card className={classes.pageNavBar}>
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5">{this.props.label}</Typography>
                <Typography variant="caption">{this.props.subtitle}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="flex-end">
                  <Badge
                    style={{ fontSize: 50 }}
                    badgeContent={this.props.count}
                    color="primary"
                  >
                    <Icon style={{ fontSize: 60 }} color="secondary">
                      {this.props.iconName}
                    </Icon>
                  </Badge>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              to={this.props.addLink}
              size="small"
            >
              Add
            </Button>
            <Button
              component={Link}
              variant="contained"
              color="secondary"
              to={this.props.viewLink}
              size="small"
            >
              View
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardStats);
