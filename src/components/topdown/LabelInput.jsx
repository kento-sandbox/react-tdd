import React from 'react';
import PropTypes from 'prop-types';

export default class LabelInput extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      value: '',
      hasError: false,
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind (this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
  };

  handleChange (event) {
    this.setState ({value: event.target.value});
  }

  render () {
    const {id, name, type, labelText} = this.props;
    return (
      <React.Fragment>
        <label htmlFor={id}>{labelText}</label>
        <input type={type} name={name} id={id} onChange={this.handleChange} />
        {this.state.hasError &&
          <div id={id + '-error'}>{this.state.errorMessage}</div>}
      </React.Fragment>
    );
  }
}
