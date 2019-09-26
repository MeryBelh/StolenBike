import React, { Component } from 'react';
import { Button, Col, Form, Row, Select } from 'antd';
import {
  fetchPrestatiaire,
  fetchTypePrestatiaire,
  fetchVilles,
} from '../../../../../../services/prestataire';

const { Item } = Form;
const { Option } = Select;

@Form.create()
class EditPrestataire extends Component {
  state = {
    typePrestataires: [],
    villes: [],
    prestataires: [],
  };

  componentDidMount() {
    const {
      prestataire,
      prestataire: { codeTypePrestataire, codeVille },
    } = this.props;

    console.log('prestataire', prestataire);
    fetchTypePrestatiaire().then(data => {
      this.setState({ typePrestataires: data });
    });

    fetchVilles(codeTypePrestataire).then(data => {
      this.setState({ villes: data });
    });

    fetchPrestatiaire(codeTypePrestataire, codeVille).then(data => {
      this.setState({ prestataires: data });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editPrestataire(values);
    });
  };

  editPrestataire = values => {
    console.log('values', values);
    const { dispatch, pec, refresh } = this.props
    dispatch({ type: 'editPec/editPrestation', payload : {...pec, ...values}})
    if(refresh) refresh()
  };

  onSelectTypePrestataire = typePrestataire => {
    const { form: { setFieldsValue}} = this.props
    fetchVilles(typePrestataire).then(data => {
      this.setState({ villes: data });
      setFieldsValue({ ville: null})
      setFieldsValue({ nomPrestataire: null})

    });

  };

  onSelectVille = ville => {
   const { form: { getFieldValue, setFieldsValue }} = this.props

    fetchPrestatiaire(getFieldValue('typePrestation'),ville).then(data =>{
      this.setState({ prestataires: data });
      setFieldsValue({ nomPrestataire: null})
    } )
  };

  render() {
    const {
      form: { getFieldDecorator },
      prestataire: { typePrestataire, ville, nomPrestataire },
    } = this.props;

    const { typePrestataires, villes, prestataires } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={8}>
            <Item label="Type préstation">
              {getFieldDecorator('typePrestation', {
                initialValue: typePrestataire,
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir ',
                  },
                ],
              })(
                <Select onChange={this.onSelectTypePrestataire}>
                  {typePrestataires.map(item => (
                    <Option value={item.codeTypePrestataire} key={item.codeTypePrestataire}>
                      {item.typePrestataire}
                    </Option>
                  ))}
                </Select>,
              )}
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Ville">
              {getFieldDecorator('ville', {
                initialValue: ville,
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir ',
                  },
                ],
              })(
                <Select onChange={this.onSelectVille}>
                  {villes.map(item => (
                    <Option value={item.codeVille} key={item.codeVille}>
                      {item.ville}
                    </Option>
                  ))}
                </Select>,
              )}
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Nom Prestataire">
              {getFieldDecorator('nomPrestataire', {
                initialValue: nomPrestataire,
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir ',
                  },
                ],
              })(
                <Select>
                  {prestataires.map(item => (
                    <Option value={item.codePrestataire} key={item.codePrestataire}>
                      {item.nomPrestataire}
                    </Option>
                  ))}
                </Select>,
              )}
            </Item>
          </Col>
        </Row>
        <div>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </div>
      </Form>
    );
  }
}

export default EditPrestataire;
