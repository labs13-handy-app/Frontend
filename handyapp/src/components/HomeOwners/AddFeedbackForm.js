import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFeedback} from '../../actions';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

class AddFeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      reviewer_name: '',
      contractor_id: props.id,
      recommend: '',
      rating: ''
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChanges}
            placeholder="title"
            name="title"
            value={this.state.title}
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.description}
            placeholder="description"
            name="description"
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.reviwer_name}
            placeholder="your name"
            name="reviewer_name"
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.recommend}
            placeholder="would you recommend?"
            name="recommend"
          />
          <input
            type="number"
            onChange={this.handleChanges}
            value={this.state.rating}
            placeholder="rating"
            name="rating"
          />
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Select
                value={values.age}
                onChange={handleChange}
                name="age"
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value="" disabled>
                  Placeholder
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Placeholder</FormHelperText>
            </FormControl>
          </Grid>
        </form>
        <button onClick={() => this.props.addFeedback(this.state)}>
          Submit Feedback
        </button>
      </div>
    );
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChanges}
            placeholder="title"
            name="title"
            value={this.state.title}
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.description}
            placeholder="description"
            name="description"
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.reviwer_name}
            placeholder="your name"
            name="reviewer_name"
          />
          <input
            type="number"
            onChange={this.handleChanges}
            value={this.state.contractor_id}
            placeholder="contractor_id"
            name="contractor_id"
          />
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.recommend}
            placeholder="would you recommend?"
            name="recommend"
          />
          <input
            type="number"
            onChange={this.handleChanges}
            value={this.state.rating}
            placeholder="rating"
            name="rating"
          />
        </form>
        <button onClick={() => this.props.addFeedback(this.state)}>
          Submit Feedback
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {feedback: state.feedback};
};

export default connect(
  mapStateToProps,
  {addFeedback}
)(AddFeedbackForm);
