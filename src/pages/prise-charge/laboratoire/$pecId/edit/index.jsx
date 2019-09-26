import React from 'react';
import EditePage from './components/EditePage';
import {connect} from 'dva';

const mapStateToProps = ({ pecDetail }) => ({
  pec: pecDetail.pec,
  prestations: pecDetail.prestations,
  contrat: pecDetail.contrat,
  adherent: pecDetail.adherent,
  beneficiaire: pecDetail.beneficiaire,
});

export default connect(mapStateToProps)(EditePage)
