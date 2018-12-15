import React from "react"
import { connect } from "react-redux"
import { readEvents } from "../actions"
import _ from "lodash"
import { Link } from "react-router-dom"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import Fab from "@material-ui/core/Fab"

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }
  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">ID</TableCell>
              <TableCell component="th">Title</TableCell>
              <TableCell component="th">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderEvents()}</TableBody>
        </Table>
        <Fab color="primary" component={Link} to="/events/new" style={style}>
          +
        </Fab>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = { readEvents }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex)
