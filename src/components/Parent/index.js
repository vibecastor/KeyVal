import React, {Component} from 'react';
import parentTemplate from './Parent';

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addForms: false,
      key: '',
      value: ''
    };

  this.addForm = this.addForm.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleRemoveForm = this.handleRemoveForm(this);

  }

  // -----MEMBER FUNCTIONS----------
  addForm(event) {
    // onClick render a KeyValue Component...
  }

  handleSubmit(event) {
    event.preventDefault();
    // onSubmit console.log(JSON.stringify(this.state[key][value]))
  }

  handleRemoveForm(event) {
    // onClick remove KeyValue Component
  }

  // --------LIFECYCLE HOOKS--------
  render() {
    return parentTemplate.call(this)
  }
};

