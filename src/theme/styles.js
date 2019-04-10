const styles = theme => ({
  addButtonContainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start"
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  pageNavBar: {
    backgroundColor: "#eee"
  },
  headerBandTitle: {
    marginBottom: 5
  },
  pageTitle: {
    color: "#666"
  },
  purpleText: {
    color: "#57346e"
  },
  textField: {
    width: 245
  },
  bandButton: {
    marginRight: 5
  },
  greenText: {
    color: "#2e7d42"
  },
  greenBadge: {
    backgroundColor: "#39aa56",
    color: "#ffffff"
  },
  band: {
    borderLeft: "10px solid #39aa56",
    padding: 20,
    marginBottom: 10
  },
  disabled: {
    color: "#a1a1a1"
  },
  disabledBand: {
    borderLeft: "10px solid #f1f1f1",
    padding: 20,
    marginBottom: 10
  }
});
export default styles;
