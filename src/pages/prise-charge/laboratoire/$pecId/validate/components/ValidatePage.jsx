import React from 'react';
import PecPage from '../../components/PecPage';
import { Button, Modal } from 'antd';
import styled from '@emotion/styled';
import router from 'umi/router';
import EstimationDetail from '../../../../components/EstimationDetail';
import PecDocuments from '../../../../components/PecDocuments';
import BeneficiaireView from '../../../../components/BeneficiaireView';
import PrestationDetail from '../../../../components/PrestationDetail';
import PecObservations from '../../../../components/PecObservations';
import ConfirmPecReject from '../../../../components/ConfirmPecReject';
const { confirm } = Modal;

class ValidatePage extends PecPage {
  state = {};

  showConfirm = validatePec => {
    confirm({
      title: '',
      content: 'Etes vous sur de vouloir valider cette demande',
      onOk() {
        validatePec();
      },
      onCancel() {},
    });
  };

  pecRejectedInfo = (pecId, dispatch) => {
    Modal.info({
      title: 'abondonner prise en charge ',
      content: (
        <div>
          <p>la prise en charge {pecId} est rejetée avec success</p>
        </div>
      ),
      onOk() {
        router.push(`/taches`);
        dispatch({ type: 'pecDetail/changePecRejected', payload: false });
      },
    });
  };

  render() {
    const {
      pec,
      pec: { etatPec, observation },
      prestations,
      contrat,
      adherent,
      beneficiaire,
      pecValidated,
      pecRejected,
      dispatch,
    } = this.props;

    const links = [
      { text: 'attestion1', link: 'www.google.com' },
      { text: 'attestion2', link: 'www.youtube.com' },
    ];

    const { confirmRejectVisible } = this.state;

    if (pecValidated) {
      router.push(`/taches`);
      dispatch({ type: 'pecDetail/changePecValidated', payload: false });
    }
    if (pecRejected) {
      this.pecRejectedInfo(pec.id, dispatch);
      dispatch({ type: 'pecDetail/changePecRejected', payload: false });
    }

    return (
      <>
        <p>
          Afin de ne pas retarder le traitement de cette demande, il est préférable de la valider ou
          rejeter dans les meilleurs délais
        </p>
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
          <PecObservations observations={observation} />
        </Bloc>
        <Bloc>
          <PecDocuments links={links} />
        </Bloc>
        {etatPec === '1' && (
          <Bloc>
            <Button type="primary" onClick={() => this.showConfirm(this.validatePec)}>
              Valider
            </Button>
            <Button type="danger" onClick={this.showRejectPecModal}>
              Rejeter
            </Button>
          </Bloc>
        )}
        <ConfirmPecReject
          visible={confirmRejectVisible}
          rejectPec={this.rejectPec}
        />
      </>
    );
  }

  validatePec = () => {
    const {
      dispatch,
      match: {
        params: { pecId },
      },
    } = this.props;
    dispatch({ type: 'pecDetail/validatePec', payload: { pecId } });
  };

  rejectPec = (motif) => {
    const {
      dispatch,
      match: {
        params: { pecId },
      },
    } = this.props;
    dispatch({ type: 'pecDetail/rejectPec', payload: { numeroDeclaration: Number(pecId), motif } });
    this.hideRejectPecModal()
  };

  showRejectPecModal = () => {
    this.setState({ confirmRejectVisible: true });
  };

  hideRejectPecModal = () => {
    this.setState({ confirmRejectVisible: false });
  };
}

export default ValidatePage;

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
