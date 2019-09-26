import React, { Component } from 'react';
import { Input } from 'antd';

class UppercaseInput extends Component {
  constructor(props) {
    super(props);
    const value = (props.value|| '').toUpperCase();
    this.state = { value };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) return { ...(nextProps.value || '') };
    return null;
  }

  handleChange = ({ target }) => {

    const value = (target.value || '').toUpperCase()
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) onChange(value);
  };

  render() {
    const { value } = this.state;
    return <Input value={value} onChange={this.handleChange} />;
  }
}

export default UppercaseInput;
