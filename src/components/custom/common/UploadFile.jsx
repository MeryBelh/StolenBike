import React, { Component } from 'react';
import { Upload, Button, Icon, Row, Col } from 'antd';

export default class extends Component {
  constructor(props) {
    super(props);
    const value = props.value || { fileList: [] };
    this.state = { value };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) return { ...(nextProps.value || { fileList: [] }) };
    return null;
  }

  setFileList = ({ fileList: fileToUpload }) => {
    const fileList = fileToUpload.map(file => {
      if (file.response) file.url = file.response.url;
      return file;
    });

    const value = { fileList };
    const { onChange } = this.props;
    if (onChange) onChange(value);
    this.setState({ value });
  };

  render() {
    const {
      value: { fileList },
    } = this.state;

    const { title } = this.props;

    return (
      <Upload action="" onChange={this.setFileList} multiple fileList={fileList}>
        <Row>
          <Button>
            <Icon type="upload" /> Joindre
          </Button>
          &nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;&nbsp;
        </Row>
      </Upload>
    );
  }
}
