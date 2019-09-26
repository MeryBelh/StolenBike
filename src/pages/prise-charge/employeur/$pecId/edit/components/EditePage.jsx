import React from 'react';
import PecPage from '../../components/PecPage';
import { Button, Descriptions, Drawer } from 'antd';
import styled from '@emotion/styled';
import router from 'umi/router';
import PecDocuments from '../../../../components/PecDocuments';
import EditObservation from '../../../../components/EditObservation';
import BeneficiaireView from '../../../../components/BeneficiaireView';
import PecObservations from '../../../../components/PecObservations';
import EditBeneficiaire from '../../../../components/EditBeneficiaire';
import EditDocuments from '../../../../components/EditDocuments';
import EditPrestation from './EditPresatation';
import EditPrestataire from './EditPrestataire';

const { Item } = Descriptions;

class EditePage extends PecPage {
  constructor(props) {
    super(props);
    this.state = { drawerVisibile: false };
  }

  drawerContent = <p>drawer Content</p>;

  drawerTitle = '';

  refreshData = () => {
    console.log('refreshing data');
    const {
      dispatch,
      pec: { numeroDeclaration: pecId },
    } = this.props;
    dispatch({ type: `pecDetail/fetchPecData`, payload: pecId });
    this.onClose();
  };

  editBeneficiaire = () => {
    const { adherent, dispatch } = this.props;
    this.drawerContent = (
      <EditBeneficiaire adherent={adherent} refreshData={this.refreshData} dispatch={dispatch} />
    );
    this.drawerTitle = 'Modifier Adherent';
    this.setState({ drawerVisibile: true });
  };

  editPrestations = () => {
    const { pec, dispatch } = this.props;
    this.drawerContent = (
      <EditPrestation pec={pec} refreshData={this.refreshData} dispatch={dispatch} />
    );
    this.drawerTitle = 'Modifier Prestations';
    this.setState({ drawerVisibile: true });
  };

  editPrestataire = () =>{
    const { prestataire, dispatch} = this.props
    this.drawerContent = <EditPrestataire prestataire={prestataire} dispatch={dispatch} refresh={this.refreshData}  />
    this.drawerTitle = 'Modifier Prestataire Informations';
    this.setState({ drawerVisibile: true });
  }

  editObservation = () => {
    const { pec, dispatch } = this.props;
    this.drawerContent = (
      <EditObservation pec={pec} refreshData={this.refreshData} dispatch={dispatch} />
    );
    this.drawerTitle = 'Modifier Observation';
    this.setState({ drawerVisibile: true });
  };

  editDocuments = () => {
    const { dispatch } = this.props;
    this.drawerContent = <EditDocuments refreshData={this.refreshData} dispatch={dispatch} />;
    this.drawerTitle = 'Modifier Documents';
    this.setState({ drawerVisibile: true });
  };

  onClose = () => {
    this.setState({ drawerVisibile: false });
  };

  render() {
    const { drawerVisibile } = this.state;
    const {
      pec,
      pec: { dateConsultation, medecin },
      contrat,
      adherent,
      beneficiaire,
      prestataire: { typePrestataire, ville, nomPrestataire },
    } = this.props;
    const links = [
      { text: 'attestion1', link: 'www.google.com' },
      { text: 'attestion2', link: 'www.youtube.com' },
    ];

    return (
      <>
        <Drawer
          width={720}
          title={this.drawerTitle}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={drawerVisibile}
        >
          {this.drawerContent}
        </Drawer>
        <Bloc>
          <Button type="primary" shape="circle" icon="edit" onClick={this.editBeneficiaire} />
          <BeneficiaireView
            contrat={contrat}
            adherent={adherent}
            beneficiaire={beneficiaire}
            showContact
          />
        </Bloc>
        <Bloc>
          <Button type="primary" shape="circle" icon="edit" onClick={this.editPrestations} />
          <Descriptions>
            <Descriptions.Item label="Date Consultation">{dateConsultation}</Descriptions.Item>
            <Item label="Médecin">{medecin}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <Button type="primary" shape="circle" icon="edit" onClick={this.editPrestataire} />
          <Descriptions>
            <Item label="Type préstation">{typePrestataire}</Item>
            <Item label="ville">{ville}</Item>
            <Item label="nom Prestataire">{nomPrestataire}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <Button type="primary" shape="circle" icon="edit" onClick={this.editObservation} />
          <PecObservations observations={pec.observation} />
        </Bloc>
        <Bloc>
          <Button type="primary" shape="circle" icon="edit" onClick={this.editDocuments} />
          <PecDocuments links={links} />
        </Bloc>
        <Button type="primary" onClick={this.terminer}>
          Valider
        </Button>
      </>
    );
  }

  terminer = () => {
    const {
      match: {
        params: { pecId },
      },
    } = this.props;

    router.push(`/prise-charge/laboratoire/${pecId}`);
  };
}

export default EditePage;

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
