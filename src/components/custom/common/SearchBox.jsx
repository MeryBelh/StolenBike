import React, { Component } from 'react';
import { Button, Col, DatePicker, Form, Icon, Input, Row, Select } from 'antd';
import SearchHint from './SearchHint';

@Form.create()
class SearchBox extends Component {
  state = {
    expand: false,
  };
  // To generate mock Form.Item
  getFields() {
    const { expand } = this.state;
    const {
      form: { getFieldDecorator },
      searchMapper: searchFields,
    } = this.props;

    return searchFields.map(searchField => {
      const { label, name, secondary, rules, initialValue } = searchField;

      return (
        <Col span={8} key={name} style={{ display: !secondary || expand ? 'block' : 'none' }}>
          <Form.Item label={label}>
            {getFieldDecorator(name, {
              rules,
              initialValue,
            })(this.renderItem(searchField))}
          </Form.Item>
        </Col>
      );
    });
  }

  renderItem(item) {
    const { name, type, options } = item;
    if (type === 'date') return <DatePicker name={name} format="DD/MM/YYYY" />;
    if (type === 'dateRange') return <DatePicker.RangePicker name={name} format="DD/MM/YYYY" />;
    if (options) return this.renderSelect(item);

    return <Input name={name} />;
  }

  renderSelect(item) {
    const { label, name, options } = item;
    return (
      <Select label={label} name={name}>
        {options.map(option => {
          if (option.code && option.libelle) {
            return (
              <Select.Option key={name} value={option.code}>
                {option.libelle}
              </Select.Option>
            );
          }
          return (
            <Select.Option key={name} value={option}>
              {option}
            </Select.Option>
          );
        })}
      </Select>
    );
  }

  renderSearchButton = () => {
    const { hintMessage } = this.props;

    if (!hintMessage) {
      return (
        <Button type="primary" htmlType="submit">
          Lancer la recherche
        </Button>
      );
    }

    return (
      <SearchHint data={hintMessage}>
        <Button type="primary" htmlType="submit">
          Lancer la recherche
        </Button>
      </SearchHint>
    );
  };

  hasSecondaryFields = () => {
    const { searchMapper: searchFields } = this.props;
    for (let i = 0; i < searchFields.length; i++) if (searchFields[i].secondary) return true;

    return false;
  };

  handleSearch = e => {
    const {
      form: { validateFields },
      onSearch,
    } = this.props;
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) onSearch(values);
    });
  };

  handleReset = () => {
    const {
      form: { resetFields },
    } = this.props;
    resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const { expand } = this.state;
    const { method } = this.props;
    return (
      <Form
        method={method}
        style={{
          padding: '24px',
          background: '#fbfbfb',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
        }}
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <a
              style={{
                marginLeft: 8,
                fontSize: 12,
                display: this.hasSecondaryFields() ? 'block' : 'none',
                marginBottom: '10px',
              }}
              onClick={this.toggle}
            >
              {`Recherche avancée...`}
              <Icon type={expand ? 'up' : 'down'} />
            </a>
            {this.renderSearchButton()}
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Effacer
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBox;
