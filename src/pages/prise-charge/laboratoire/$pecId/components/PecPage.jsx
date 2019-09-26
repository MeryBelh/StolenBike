import React, { Component } from 'react';

import styled from '@emotion/styled';
import { Button, Modal } from 'antd';
import router from 'umi/router';
import PrestationDetail from '../../../components/PrestationDetail';
import EstimationDetail from '../../../components/EstimationDetail';
import PecObservations from '../../../components/PecObservations';
import PecDocuments from '../../../components/PecDocuments';
import BeneficiaireView from '../../../components/BeneficiaireView';
import ConfirmPecReject from '../../../components/ConfirmPecReject';

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

    router.push(`/prise-charge/laboratoire/${pecId}/edit`);
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
    dispatch({ type: `${this.model}/submitPec`, payload: { pecId } });
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
      prestations,
      contrat,
      adherent,
      beneficiaire,
      pecSubmitted,
      pecGivedUp,
      dispatch,
    } = this.props;


    const links = [
      { text: 'attestion1', link: 'www.google.com' },
      { text: 'attestion2', link: 'www.youtube.com' },
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
          ;
        </Bloc>
        <Bloc>
          <PrestationDetail pec={pec} />
        </Bloc>
        <Bloc>
          <EstimationDetail prestations={prestations} />
        </Bloc>
        <Bloc>
          <PecObservations observations={pec.observation} />
        </Bloc>
        <Bloc>
          <PecDocuments links={links} />
        </Bloc>
        { etatPec === '0' && (
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
