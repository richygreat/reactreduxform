import React, { Component } from "react"
import { withStyles, TextField, Paper, Grid, Typography, Icon, Button } from "@material-ui/core";
import styles from "../theme/styles";

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container justify="center" style={{ padding: 20 }}>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Paper>
                            <Grid container>
                                <Grid item style={{ backgroundColor: "#57346e", width: 70 }}>
                                    <Grid container justify="center" style={{ marginTop: 20 }}>
                                        <Icon color="primary" fontSize="large">extension</Icon>
                                    </Grid>
                                </Grid>
                                <Grid item style={{ padding: 20 }}>
                                    <Typography className={classes.purpleText} variant="h4">Create Story</Typography>
                                    <Typography variant="subtitle1" style={{ marginLeft: 3 }}>Create story under an Epic</Typography>
                                    <div style={{ marginLeft: 5 }}>
                                        <div>
                                            <TextField
                                                id="description-text"
                                                label="Story Description"
                                                helperText="One line description of your story"
                                                margin="normal"
                                                className={classes.textField}
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                id="valuepoints-text"
                                                label="Value Points"
                                                helperText="Value points given by PO"
                                                margin="normal"
                                                className={classes.textField}
                                            />
                                        </div>
                                        <div>
                                            <Button size="large" variant="contained" color="primary" style={{ marginTop: 20 }}>
                                                Create
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login);