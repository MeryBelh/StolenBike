import React, { Component } from 'react';

/*import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import router from 'umi/router';
import AdherentDetailsDescription from './AdherentDetailsDescription';
import DataTable from '../../../../../components/custom/common/DataTable';
import { getAuthority } from '../../../../../utils/authority';*/

class AdherentDetailsPage extends Component {
  /* model = 'adherentDetails';

  componentDidMount() {
    this.fetchData('fetchBeneficiaires');
    this.fetchData('fetchAdherent');
  }

  fetchData = (action, frontPagination = {}) => {
    const {
      dispatch,
      match: {
        params: { numero, categorie, numeroContrat },
      },
    } = this.props;
    dispatch({ type: 'adherentDetails/fetchBeneficiaires', payload: { numero, frontPagination } });
    dispatch({
      type: 'adherentDetails/fetchAdherent',
      payload: { numero, categorie, numeroContrat, frontPagination },
    });
  };

  retour() {
    router.go(-1);
  }
*/
  render() {
    /* const { beneficiaires, adherent } = this.props;
    if (
      beneficiaires &&
      beneficiaires.data.filter(beneficiaire => beneficiaire.numeroBeneficiaire === 1).length === 0
    )
      beneficiaires.data.unshift({
        numeroBeneficiaire: 1,
        type: 'Assuré principal',
        nomBeneficiaire: adherent.nomAdherent,
        ...adherent,
      });
*/
    /*const actionColumns = [
      {
        name: 'numeroBeneficiaire',
        render: beneficiaire => {

          let typePrestataire
            if(getAuthority().includes("LABORATOIRES D'ANALY"))
            typePrestataire = 'laboratoire'
          else if (getAuthority().includes("ROLE_SANTE_INTERMEDIAIRE"))
              typePrestataire = 'employeur';
          else if(getAuthority().includes("CABINET DE RADIOLOGI"))
              typePrestataire = 'radio';

          return (
            <Link
              to={{
                pathname: `/prise-charge/${typePrestataire}/create/${beneficiaire.numeroAdherent}/${beneficiaire.numeroBeneficiaire}`,
                beneficiaire,
              }}
            >
              demander une PEC
            </Link>
          );
        },
      },
    ];
*/
    return (
      <div>
        <Button type="primary"> Retour </Button>
        <br />
        <br />
        <h1>
          <Icon type="search" /> Identification de l'adhérent :
        </h1>
        <br />

        <h1>
          <Icon type="unordered-list" /> Liste des personnes à charge :
        </h1>
        <br />
        {
          //<DataTable
          // dataSource={beneficiaires}
          //onChange={pagination => this.fetchData('fetchBeneficiaires', pagination)}
          //actionColumns={actionColumns}
          ///>
        }
      </div>
    );
  }
}

export default AdherentDetailsPage;
