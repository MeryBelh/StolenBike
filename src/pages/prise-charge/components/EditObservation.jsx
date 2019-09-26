import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const { Item } = Form;

@Form.create()
class EditObservation extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editObservation(values);
    });
  };

  editObservation = values => {
    const { pec: {numeroDeclaration}, dispatch, refreshData } = this.props;
    const {observation} = values
    dispatch({ type: 'editPec/editObservation', payload: { numeroDeclaration, observation } });
    if (refreshData) refreshData();
  };

  render() {
    const {
      form: { getFieldDecorator },
      pec: { observation },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item>
          {getFieldDecorator('observation', {
            initialValue: observation,
            rules: [
              {
                required: true,
                message: 'veuillez saisir ',
              },
            ],
          })(<TextArea rows={4} placeholder="Ecrire votre commentaire" />)}
        </Item>
        <div>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </div>
      </Form>
    );
  }
}

export default EditObservation;
