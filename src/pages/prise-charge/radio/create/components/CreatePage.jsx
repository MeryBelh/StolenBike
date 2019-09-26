import React, { Component } from 'react';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import styled from '@emotion/styled';
import router from 'umi/router';
import MoroccanDatePicker from '@/components/custom/common/MoroccanDatePicker';
import UppercaseInput from '@/components/custom/common/UppercaseInput';
import UploadFiles from '@/components/custom/common/UploadFiles';
import PathologieCascader from '@/pages/prise-charge/components/PathologieCascader';
import BeneficiaireView from '@/pages/prise-charge/components/BeneficiaireView';
import EstimationInput from '@/pages/prise-charge/radio/components/EstimationInput';

const { Item } = Form;
const { TextArea } = Input;

@Form.create()
class CreatePage extends Component {
  model = 'createPec';

  componentDidMount() {
    const {
      dispatch,
      match: { params },
    } = this.props;
    dispatch({ type: `${this.model}/fetchData`, payload: params });
    dispatch({ type: `${this.model}/fetchPathologies` });
    dispatch({ type: `${this.model}/fetchBaremes` });
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
      pathologie,
      medecin,
      observation,
      estimation: { baremes },
      files,
      email,
      telephone,
    } = values;
    const { numeroBeneficiaire } = beneficiaire;

    const detailDeclarations = baremes.map(estimationItem => {
      const {
        codeBareme,
        codeActe: codePrestation,
        estimation: montantEnregistre,
        montant: fraisInitial,
        codeSousActe,
        cotation: nombreD,
      } = estimationItem;
      return {
        codeBareme,
        codePrestation,
        montantEnregistre,
        fraisInitial,
        nombreD,
        nombreActe: baremes.length,
        codeSousActe,
      };
    });

    const pec = {
      categorie,
      dateConsultation,
      codePathologie: pathologie[1],
      email,
      telephone,
      numeroAdherent,
      numeroBeneficiaire,
      // TODO: Fill this four attributes
      codeTiersPayant: '9622',
      emetteur: 'CABINET DE RADIOLOGI',
      codeCmetteur: '9622',
      numeroContrat,
      medecin,
      observation,
      detailDeclarations,
    };

    // dispatch({ type: 'editPec/editAdherent', payload: { ...adherent, email, telephone} });
    dispatch({ type: `${this.model}/createPec`, payload: { pec, AUTRE: files } });
  };

  checkEstimations = (rule, value, callback) => {
    if (value.baremes.length > 0) {
      callback();
      return;
    }

    callback('merci de saisir une estimation');
  };

  pecCreatedInfo = pecId => {
    Modal.info({
      title: 'creation prise en charge',
      content: (
        <div>
          <p>la prise en charge {pecId} a etait creer avec success</p>
        </div>
      ),
      onOk() {
        router.push(`/prise-charge/radio/${pecId}`);
      },
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      pathologies,
      adherent,
      beneficiaire,
      contrat,
      baremes,
      pecId,
      dispatch,
    } = this.props;
    const { email, telephone } = adherent;

    if (pecId) {
      dispatch({ type: 'createPec/changePecId', payload: null });
      router.push(`/prise-charge/radio/${pecId}`);
    }

    // this.pecCreatedInfo(pecId);

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
              <Item label="pathologie">
                {getFieldDecorator('pathologie', {
                  rules: [
                    {
                      required: true,
                      message: 'veuillez saisir une pathologie',
                    },
                  ],
                })(<PathologieCascader pathologies={pathologies} />)}
              </Item>
            </Col>

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
          <h3>prestations</h3>
          <Item>
            {getFieldDecorator('estimation', {
              rules: [{ validator: this.checkEstimations }],
            })(<EstimationInput baremes={baremes} />)}
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

        <Bloc>
          <h3>Pieces joints</h3>
          <Item>
            {getFieldDecorator('files', {
              rules: [
                {
                  required: false,
                  message: 'veuillez saisir ',
                },
              ],
            })(<UploadFiles />)}
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
