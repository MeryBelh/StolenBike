import React from 'react';
import PecPage from '../../components/PecPage';
import { Button, Descriptions } from 'antd';
import styled from '@emotion/styled';
import EstimationDetail from '../../../../components/EstimationDetail';
import BeneficiaireView from '../../../../components/BeneficiaireView';
import PrestationDetail from '../../../../components/PrestationDetail';

const { Item } = Descriptions;

class RecapPage extends PecPage {
  render() {
    const {
      pec,
      pec: {
        dateDemande,
        etatLibelle,
        dateTraitement,
        nomPrestataire,
        codePrestataire,
        telephonePrestataire,
        adressePrestataire,
      },
      prestations,
      contrat,
      adherent,
      beneficiaire,
    } = this.props;

    console.log('prestations', prestations)

    return (
      <>
        <Bloc>
          <h3>Dossier de prise en charge :</h3>
          <Descriptions>
            <Item label="Référence">123456789</Item>
            <Item label="Date demande">{dateDemande}</Item>
            <Item label="Statut">
              {etatLibelle === 'acord' && <span style={{ color: 'green' }}>Accordée**</span>}
              {etatLibelle === 'rejet' && <span style={{ color: 'red' }}>Rejetéé</span>}
            </Item>
            <Item label="Date validation compagnie">{dateTraitement}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <h3>Pour le prestataire :</h3>
          <Descriptions>
            <Item label="Nom prestataire">{nomPrestataire}</Item>
            <Item label="Code convention">{codePrestataire}</Item>
            <Item label="N° de téléphone">{telephonePrestataire}</Item>
            <Item label="Adresse">{adressePrestataire}</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <BeneficiaireView
            title="Pour le bénéficiaire"
            contrat={contrat}
            adherent={adherent}
            beneficiaire={beneficiaire}
            showContact
          />
        </Bloc>
        <Bloc>
          <PrestationDetail pec={pec} title="Détail de la prestation" />
          <EstimationDetail prestations={prestations} title=" " />
        </Bloc>
        <br />
        <br />
        {etatLibelle === 'accord' && (
          <p>
            {' '}
            ** Veuillez noter que cet accord est valable un mois à partir de la date de validation
            par la compagnie
          </p>
        )}

        {etatLibelle === 'rejet' && (
          <Bloc>
            <h3>Motif de rejet de la demande</h3>
            <p>Explication du gestionnaire</p>
          </Bloc>
        )}

        <br />
        <br />
        {etatLibelle === 'accord' && <Button type="primary">Télécharger lettre d'accord </Button>}
        {etatLibelle === 'rejet' && <Button type="primary">Télécharger lettre de rejet</Button>}
      </>
    );
  }
}

export default RecapPage;

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
