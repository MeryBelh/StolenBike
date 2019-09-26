import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';

@Form.create()
class EditBeneficiaire extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editBeneficiaire(values);
    });
  };

  editBeneficiaire = values => {
    const { adherent, dispatch, refreshData } = this.props;
    dispatch({ type: 'editPec/editAdherent', payload: { ...adherent, ...values } });
    if (refreshData) refreshData();
  };

  render() {
    const {
      form: { getFieldDecorator },
      adherent,
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Téléphone">
          {getFieldDecorator('telephone', {
            initialValue: adherent.telephone,
            rules: [
              {
                required: true,
                message: 'veuillez sqisir un numero telephone valide',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Email assuré">
          {getFieldDecorator('email', {
            initialValue: adherent.email,
            rules: [
              {
                required: true,
                message: 'veuillez sqisir un email valide',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <div>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </div>
      </Form>
    );
  }
}

export default EditBeneficiaire;
