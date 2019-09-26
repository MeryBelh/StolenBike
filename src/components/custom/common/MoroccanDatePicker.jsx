import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

class MoroccanDatePicker extends Component {
  dateFormat = 'DD/MM/YYYY';

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = { value: value || null };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) return { ...(nextProps.value || null) };
    return null;
  }

  handleChange = date => {
    const dateFormatted = date ? date.format(this.dateFormat) : null;
    this.setState({ value: dateFormatted });
    const { onChange } = this.props;
    if (onChange) onChange(dateFormatted);
  };

  render() {
    const { value } = this.state;
    return (
      <DatePicker
        style={{ width: '100%' }}
        defaultValue={value ? moment(value, this.dateFormat) : null}
        format={this.dateFormat}
        onChange={this.handleChange}
      />
    );
  }
}

export default MoroccanDatePicker;
