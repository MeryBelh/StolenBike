import React, { PureComponent } from 'react';
import { Button, Form } from 'antd';

@Form.create()
class AddForm extends PureComponent {
  formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  handleSave = () => {
    const { form, onSave } = this.props;
    form.validateFields((err, values) => {
      if (!err) onSave(values);
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      children: items,
      layout,
    } = this.props;

    return (
      <Form layout={layout}>
        {items.map(item => (
          <Form.Item key={item.props.name} label={item.props.label} {...this.formItemLayout}>
            {getFieldDecorator(item.props.name, {
              initialValue: item.props.value,
              rules: [{ required: item.props.required, message: 'Merci de saisir ..!' }],
            })(item)}
          </Form.Item>
        ))}

        <Form.Item
          wrapperCol={{
            xs: { offset: 0 },
            sm: { offset: 8 },
          }}
        >
          <Button type="primary" icon="add" onClick={this.handleSave}>
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddForm;
