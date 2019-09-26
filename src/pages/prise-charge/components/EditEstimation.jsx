import React, { Component } from 'react';
import { Button, Form } from 'antd';
import { fetchBaremes } from '@/services/pec';
import EstimationInput from './EstimationInput';

const { Item } = Form;

@Form.create()
class EditEstimation extends Component {
  constructor(props) {
    super(props);
    this.state = { baremes: [] };
    this.fetchBaremes();
  }

  fetchBaremes = () => {
    fetchBaremes().then(data => {
      this.setState({ baremes: data });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editEstimations(values);
    });
  };

  editEstimations = values => {
    const { pec, dispatch, refreshData } = this.props;
    const { numeroDeclaration } = pec;
    const {
      estimation: { baremes: detailDeclarations },
    } = values;

    dispatch({
      type: 'editPec/editEstimations',
      payload: {
        numeroDeclaration,
        codesBareme: detailDeclarations.map(detailDeclaration => detailDeclaration.codeBareme),
      },
    });
    if (refreshData) refreshData();
  };

  checkEstimations = (rule, value, callback) => {
    if (value.baremes.length > 0) {
      callback();
      return;
    }
    callback('merci de saisir une estimation');
  };

  render() {
    const {
      form: { getFieldDecorator },
      prestations,
    } = this.props;

    const { baremes: baremesFromState } = this.state;

    let baremes = [];
    let total = 0;

    if (prestations.data) {
      baremes = prestations.data.map(bareme => ({
        codeBareme: bareme.codeBareme,
        libelleSousActe: bareme.libelleSousActe,
        cotation: bareme.nombreD,
        estimation: bareme.baseRembourssement,
      }));
      total = baremes.reduce((acc, bareme) => acc + bareme.estimation, 0);
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item>
          {getFieldDecorator('estimation', {
            initialValue: { baremes, total },
            rules: [{ validator: this.checkEstimations }],
          })(<EstimationInput baremes={baremesFromState} />)}
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

export default EditEstimation;
