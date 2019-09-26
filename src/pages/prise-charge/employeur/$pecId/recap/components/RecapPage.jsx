import React from 'react';
import { Button, Descriptions } from 'antd';
import styled from '@emotion/styled';
import BeneficiaireView from '../../../../components/BeneficiaireView';
import PrestationDetail from '../../../../components/PrestationDetail';
import EstimationDetail from '../../../../components/EstimationDetail';


const { Item } = Descriptions;

class RecapPage extends PecPage {
  render() {
    const {
      pec,
      pec: { dateDemande },
      prestations,
      contrat,
      adherent,
      beneficiaire,
    } = this.props;

    const accordee = false;
    return (
      <>
        <Bloc>
          <h3>Dossier de prise en charge :</h3>
          <Descriptions>
            <Item label="Référence">123456789</Item>
            <Item label="Date demande">{dateDemande}</Item>
            <Item label="Statut">
              {accordee ? (
                <span style={{ color: 'green' }}>Accordée**</span>
              ) : (
                <span style={{ color: 'red' }}>Rejetéé</span>
              )}
            </Item>
            <Item label="Date validation compagnie">09/09/2019</Item>
          </Descriptions>
        </Bloc>
        <Bloc>
          <h3>Pour le prestataire :</h3>
          <Descriptions>
            <Item label="Nom prestataire">Radio X</Item>
            <Item label="Code convention">1234</Item>
            <Item label="N° de téléphone">0612345678</Item>
            <Item label="Adresse">XXXXXXXXXXX</Item>
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
        {accordee ? (
          <p>
            {' '}
            ** Veuillez noter que cet accord est valable un mois à partir de la date de validation
            par la compagnie
          </p>
        ) : (
          <Bloc>
            <h3>Motif de rejet de la demande</h3>
            <p>Explication du gestionnaire</p>
          </Bloc>
        )}

        <br />
        <br />
        <Button type="primary">Télécharger lettre {accordee ? "d'accord" : "de rejet"}</Button>
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
