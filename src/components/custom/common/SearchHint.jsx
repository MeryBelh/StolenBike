import React, { Component } from 'react';
import { Popover } from 'antd';

class SearchHint extends Component {
  render() {
    const {
      children,
      data: { message, options },
    } = this.props;

    const content = (
      <div>
        {options.map(option => (
          <p key={option}>{option}</p>
        ))}
      </div>
    );
    return (
      <Popover content={content} title={message}>
        {children}
      </Popover>
    );
  }
}

export default SearchHint;
