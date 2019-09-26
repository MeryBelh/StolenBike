import React, { Component } from 'react';
import MoroccanDatePicker from '../../../../../../components/custom/common/MoroccanDatePicker';
import { Button, Form } from 'antd';
import UppercaseInput from '../../../../../../components/custom/common/UppercaseInput';

const { Item } = Form;

@Form.create()
class EditPrestation extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editPrestation(values);
    });
  };

  editPrestation = values => {
    const { pathologie: pathologieTuple, dateConsultation, medecin } = values;
    const codePathologie = pathologieTuple[1];
    const { pec, dispatch, refreshData } = this.props;
    const { numeroDeclaration, observation } = pec;
    const codeTiersPayant = 442;
    dispatch({
      type: 'editPec/editPrestation',
      payload: {
        numeroDeclaration,
        codeTiersPayant,
        dateConsultation,
        medecin,
        observation,
        codePathologie,
      },
    });
    if (refreshData) refreshData();
  };

  render() {
    const {
      form: { getFieldDecorator },
      pec,
    } = this.props;

    const { dateConsultation, medecin } = pec;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Item label="Date Consultation">
          {getFieldDecorator('dateConsultation', {
            initialValue: dateConsultation,
            rules: [
              {
                required: true,
                message: 'veuillez saisir une date valide',
              },
            ],
          })(<MoroccanDatePicker />)}
        </Item>
        <Item label="Medecin">
          {getFieldDecorator('medecin', {
            initialValue: medecin,
            rules: [
              {
                required: true,
                message: 'veuillez saisir un valide medecin',
              },
            ],
          })(<UppercaseInput />)}
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

export default EditPrestation;
