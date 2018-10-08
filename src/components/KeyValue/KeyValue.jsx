import React from 'react';
import styles from './KeyValue.scss';

export default function (props) {
  return (
    <form className='keyValueInput'>
      <input
        className='keyInput'
        type='text'
        placeholder='Key'
        value={this.props.key}
        onChange={key => this.handleChange(key)}
      />
      <input
        className='valueInput'
        type='text'
        placeholder='Value'
        value={this.props.value}
        onChange={value => this.handleChange(value)}
      />
      <button>X</button>
    </form>
  );
}
