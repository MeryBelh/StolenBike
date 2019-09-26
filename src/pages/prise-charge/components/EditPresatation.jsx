import React, { Component } from 'react';
import { Button, Form } from 'antd';
import { fetchPathologies } from '@/services/pec';
import MoroccanDatePicker from '../../../components/custom/common/MoroccanDatePicker';
import UppercaseInput from '../../../components/custom/common/UppercaseInput';
import PathologieCascader from './PathologieCascader';

const { Item } = Form;

@Form.create()
class EditPrestation extends Component {
  constructor(props) {
    super(props);
    this.state = { pathologies: [] };
    this.fetchPathologies();
  }

  fetchPathologies = () => {
    const {
      pec: { pathologie: libellePathologie },
    } = this.props;
    fetchPathologies().then(data => {
      const pathologie = data.filter(item => item.libellePathologie === libellePathologie)[0];
      this.setState({ pathologies: data });
      this.setState({
        pathologie: pathologie ? [`${pathologie.codeFamille}`, pathologie.codePathologie] : null,
      });
    });
  };

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
    const { numeroDeclaration, observation } = pec
    const codeTiersPayant= 442
    dispatch({
      type: 'editPec/editPrestation',
      payload: { numeroDeclaration, codeTiersPayant, dateConsultation, medecin,   observation, codePathologie},
    });
    if (refreshData) refreshData();
  };

  render() {
    const {
      form: { getFieldDecorator },
      pec,
    } = this.props;

    const { dateConsultation, medecin } = pec;

    const { pathologies, pathologie } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item label="pathologie">
          {getFieldDecorator('pathologie', {
            initialValue: pathologie,
            rules: [
              {
                required: true,
                message: 'veuillez saisir une pathologie',
              },
            ],
          })(<PathologieCascader pathologies={pathologies} />)}
        </Item>
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
