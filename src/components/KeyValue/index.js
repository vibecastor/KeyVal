import React, {Component} from 'react';
import keyValueTemplate from './KeyValue';

export default class KeyValue extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  // -----MEMBER FUNCTIONS----------
  handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({
      [name]: value,
    });
  }

  // --------LIFECYCLE HOOKS--------
  render() {
    return keyValueTemplate.call(this)
  }
};
