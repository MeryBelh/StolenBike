import React, { Component } from 'react';

import styled from '@emotion/styled';
import { Button, Descriptions, Modal } from 'antd';
import router from 'umi/router';
import PecObservations from '../../../components/PecObservations';
import PecDocuments from '../../../components/PecDocuments';
import BeneficiaireView from '../../../components/BeneficiaireView';

const { Item } = Descriptions;

class PecPage extends Component {
  model = 'pecDetail';

  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { pecId },
      },
    } = this.props;
    dispatch({ type: `${this.model}/fetchPecData`, payload: pecId });
  }

  modifier = () => {
    const {
      match: {
        params: { pecId },
      },
    } = this.props;

    router.push(`/prise-charge/employeur/${pecId}/edit`);
  };

  abondonner = () => {
    const {
      match: {
        params: { pecId },
      },
      dispatch,
    } = this.props;
    dispatch({ type: `${this.model}/giveUpPec`, payload: { pecId } });
  };

  envoyer = () => {
    const {
      match: {
        params: { pecId },
      },
      dispatch,
    } = this.props;
    dispatch({ type: 'pecDetail/validatePec', payload: { pecId } });
  };

  pecSubimttedInfo = (pecId, dispatch) => {
    Modal.info({
      title: 'Demande Enregistrée avec succés ',
      content: (
        <div>
          <p>votre demande est soumis pour traitement </p>
          <p>Réference de la demande de prise en charge: {pecId}</p>
        </div>
      ),
      onOk() {
        router.push(`/prise-charge/saisir`);
        dispatch({ type: 'pecDetail/changPecSubmitted', payload: false });
      },
    });
  };

  pecAbondonedInfo = (pecId, dispatch) => {
    Modal.info({
      title: 'abondonner prise en charge ',
      content: (
        <div>
          <p>la prise en charge {pecId} est abondonnée avec success</p>
        </div>
      ),
      onOk() {
        router.push(`/prise-charge/saisir`);
        dispatch({ type: 'pecDetail/changePecGivedUp', payload: false });
      },
    });
  };

  render() {
    const {
      pec: { etatPec },
      pec,
      pec: { dateConsultation, medecin },
      prestataire : {typePrestataire, ville, nomPrestataire},
      contrat,
      adherent,
      beneficiaire,
      pecSubmitted,
      pecGivedUp,
      dispatch,
    } = this.props;

    const links = [
      { label: 'La préscription médicale', text: 'prescription.pdf', link: '' },
      { label: 'Le devis de la prestation', text: 'devis.jpeg', link: '' },
      { label: 'CIN', text: 'CIN.pdf', link: '' },
      { label: 'Autre documents', text: 'Doc.jpeg', link: '' },
    ];

    const { numeroDeclaration } = pec;

    if (pecSubmitted) this.pecSubimttedInfo(numeroDeclaration, dispatch);
    if (pecGivedUp) this.pecAbondonedInfo(pecGivedUp, dispatch);

    return (
      <>
        <Bloc>
          <BeneficiaireView
            contrat={contrat}
            adherent={adherent}
            beneficiaire={beneficiaire}
            showContact
          />
        </Bloc>
        <Bloc>
          <Descriptions title="Détail de la prestation">
            <Item label="Date Consultation">{dateConsultation}</Item>
            <Item label="Médecin">{medecin}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <Descriptions>
            <Item label="Type préstation">{typePrestataire}</Item>
            <Item label="ville">{ville}</Item>
            <Item label="nom Prestataire">{nomPrestataire}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <PecObservations observations={pec.observation} />
        </Bloc>
        <Bloc>
          <PecDocuments links={links} />
        </Bloc>
        {etatPec === '0' && (
          <Bloc>
            <Button onClick={this.modifier}>Modifier</Button>
            <Button onClick={this.abondonner} type="danger">
              Abondonner
            </Button>
            <Button onClick={this.envoyer} type="primary">
              envoyer
            </Button>
          </Bloc>
        )}
      </>
    );
  }
}
export default PecPage;

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
