import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { postEvent } from "../actions"

class EventsNew extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    } = field
    return (
      <TextField
        label={label}
        type={type}
        helperText={touched && error}
        {...input}
        fullWidth={true}
        error={touched && error ? true : false}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <Button
          type="submit"
          variant="outlined"
          style={style}
          disabled={pristine || submitting || invalid}
        >
          Submit
        </Button>
        <Button variant="outlined" component={Link} to="/">
          Cancel
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postEvent: values => {
      dispatch(postEvent(values))
    }
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title,please"
  if (!values.body) errors.body = "Enter a body, please"

  return errors
}
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew))
