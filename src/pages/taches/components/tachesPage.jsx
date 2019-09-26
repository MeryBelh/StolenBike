import React from 'react';
import DataTable from '@/components/custom/common/DataTable';
import { Link } from 'react-router-dom';
import { getAuthority } from '../../../utils/authority';

class TachesPage extends React.Component {

  model = 'tachesModel';

  componentDidMount() {
    this.fetchTaches();
  }

  fetchTaches= (frontPagination = {}) =>{
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/fetchTaches`,
      payload: { frontPagination },
    });
  }

  render() {
    const { taches } = this.props;
    const actionColumns = [
      {
        name: 'numeroDemande',
        render: (numeroDemande, obj) => {
          let typePrestataire
          if(getAuthority().includes("LABORATOIRES D'ANALY"))
            typePrestataire = 'laboratoire'
          else if (getAuthority().includes("ROLE_SANTE_INTERMEDIAIRE"))
            typePrestataire = 'employeur';
          else if(getAuthority().includes("CABINET DE RADIOLOGI"))
            typePrestataire = 'radio';
          else if  (getAuthority().includes("ROLE_SANTE_BACK_OFFICE"))
            typePrestataire = 'company';


          if(typePrestataire=== 'employeur') {
            return <Link to={`/prise-charge/${typePrestataire}/${obj.numeroDemande}/validate`}>détails</Link>;
          }
          if(typePrestataire === 'company'){
            if(obj.libelleTypePrestataire === "LABORATOIRES D'ANALY") {
              return <Link to={`/prise-charge/laboratoire/${obj.numeroDemande}/recap`}>détails</Link>;
            }

            if (obj.libelleTypePrestataire === "CABINET DE RADIOLOGI") {
              return <Link to={`/prise-charge/radio/${obj.numeroDemande}/recap`}>détails</Link>;
            }
          }

          return <Link to={`/prise-charge/${typePrestataire}/${obj.numeroDemande}`}>détails</Link>;
        },
      },
    ];
    return (
      <DataTable dataSource={taches} onChange={this.fetchTaches} actionColumns={actionColumns} />
    );
  }
}

export default TachesPage;
