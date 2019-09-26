import React, { Component } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import router from 'umi/router';
import BeneficiaireView from '../../../components/BeneficiaireView';
import MoroccanDatePicker from '../../../../../components/custom/common/MoroccanDatePicker';
import UppercaseInput from '../../../../../components/custom/common/UppercaseInput';
import styled from '@emotion/styled';
import UploadFile from '../../../../../components/custom/common/UploadFile';

const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

@Form.create()
class CreatePage extends Component {
  model = 'createPec';

  componentDidMount() {
    const {
      dispatch,
      match: { params },
    } = this.props;
    dispatch({ type: `${this.model}/fetchData`, payload: params });
    dispatch({ type: `${this.model}/fetchTypePrestataire` });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;

    validateFields((err, values) => {
      if (!err) this.createPec(values);
    });
  };

  createPec = values => {
    const { dispatch, adherent, beneficiaire } = this.props;
    const { categorie, numeroAdherent, numeroContrat } = adherent;
    const {
      dateConsultation,
      medecin,
      observation,
      email,
      telephone,
      nomPrestataire,
      autre,
      pm,
      devis,
      cin
    } = values;
    const { numeroBeneficiaire } = beneficiaire;



    const pec = {
      categorie,
      dateConsultation,
      email,
      telephone,
      numeroAdherent,
      numeroBeneficiaire,
      codeTiersPayant: nomPrestataire,
      // emetteur: "LABORATOIRES D'ANALY",
      // codeCmetteur: '9106',
      numeroContrat,
      medecin,
      observation,
    };

    // dispatch({ type: 'editPec/editAdherent', payload: { ...adherent, email, telephone} });
    dispatch({ type: `${this.model}/createPec`, payload: { pec, autre, pm, devis, cin } });
  };

  onSelectTypePrestataire = typePresatataire => {
    const { dispatch, form: {setFieldsValue} } = this.props;
    dispatch({ type: `${this.model}/fetchVilles`, payload: typePresatataire });
    setFieldsValue({ ville: null})
    setFieldsValue({ nomPrestataire: null})
  };

  onSelectVille = codeVille => {
    const { form: {getFieldValue, setFieldsValue}, dispatch } = this.props;
    dispatch({ type: `${this.model}/fetchPrestataires`, payload: {codeVille, typePresatataire: getFieldValue('typePrestation') } });
    setFieldsValue({ nomPrestataire: null})
  };

  render() {
    const {
      form: { getFieldDecorator },
      adherent,
      adherent : { email, telephone },
      beneficiaire,
      contrat,
      pecId,
      dispatch,
      typePrestataire,
      villes,
      prestataires,
    } = this.props;

    if (pecId) {
      dispatch({ type: 'createPec/changePecId', payload: null });
      router.push(`/prise-charge/employeur/${pecId}`);
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Bloc>
          <BeneficiaireView adherent={adherent} beneficiaire={beneficiaire} contrat={contrat} />
        </Bloc>
        <Bloc>
          <Row>
            <Col span={12}>
              <Item label="Téléphone">
                {getFieldDecorator('telephone', {
                  initialValue: telephone,
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir un numéro de téléphone',
                    },
                  ],
                })(<Input />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item label="Email assuré">
                {getFieldDecorator('email', {
                  initialValue: email,
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir un email valide',
                    },
                  ],
                })(<Input />)}
              </Item>
            </Col>
          </Row>
        </Bloc>
        <Bloc>
          <h3>Le detail déclaration maladie</h3>
          <Row>
            <Col span={8}>
              <Item label="Date Consultation">
                {getFieldDecorator('dateConsultation', {
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir une date valide',
                    },
                  ],
                })(<MoroccanDatePicker />)}
              </Item>
            </Col>
            <Col span={8}>
              <Item label="Medecin">
                {getFieldDecorator('medecin', {
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir un valide medecin',
                    },
                  ],
                })(<UppercaseInput />)}
              </Item>
            </Col>
          </Row>
        </Bloc>
        <Bloc>
          <Row>
            <Col span={8}>
              <Item label="Type préstation">
                {getFieldDecorator('typePrestation', {
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir ',
                    },
                  ],
                })(
                  <Select onChange={this.onSelectTypePrestataire}>
                    {typePrestataire.map(item => (
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
        </Bloc>
        <Bloc>
          <h3>Pieces joints</h3>

          <Item>
            {getFieldDecorator('pm', {
              rules: [
                {
                  required: true,
                  message: 'veuillez saisir ',
                },
              ],
            })(<UploadFile title="Veuillez joindre la préscription médicale" />)}
          </Item>
          <Item>
            {getFieldDecorator('devis', {
              rules: [
                {
                  required: true,
                  message: 'veuillez saisir ',
                },
              ],
            })(<UploadFile title="Veuillez joindre le devis que votre prestataire vous a remis" />)}
          </Item>
          <Item>
            {getFieldDecorator('cin', {
              rules: [
                {
                  required: true,
                  message: 'veuillez saisir ',
                },
              ],
            })(<UploadFile title="CIN" />)}
          </Item>
          <Item>
            {getFieldDecorator('autre', {
              rules: [
                {
                  required: false,
                  message: 'veuillez saisir ',
                },
              ],
            })(<UploadFile title="Autre documents" />)}
          </Item>
        </Bloc>
        <Bloc>
          <h3>Observations</h3>
          <Item>
            {getFieldDecorator('observation', {
              rules: [
                {
                  required: true,
                  message: 'veuillez saisir ',
                },
              ],
            })(<TextArea rows={4} placeholder="Ecrire votre commentaire" />)}
          </Item>
        </Bloc>

        <Item>
          <Button type="primary" htmlType="submit">
            Enregistrer
          </Button>
        </Item>
      </Form>
    );
  }
}

export default CreatePage;

const Bloc = styled.div`
  padding: 10px;
  border: 1px solid #afafb1;
  border-radius: 4px;
  margin-top: 40px;
  .estimationHeader {
    text-align: right;
    margin-bottom: 15px;
    button {
      margin-left: 8px;
    }
  }
  .textRight {
    text-align: right;
  }
`;
