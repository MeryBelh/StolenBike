import React from 'react';
import RecapPage from './components/RecapPage';
import {connect} from 'dva';

const mapStateToProps = ({ pecDetail }) => ({
  pec: pecDetail.pec,
  prestations: pecDetail.prestations,
  contrat: pecDetail.contrat,
  adherent: pecDetail.adherent,
  beneficiaire: pecDetail.beneficiaire,
  pecValidated: pecDetail.pecValidated,
  pecRejected: pecDetail.pecRejected,
});

export default connect(mapStateToProps)(RecapPage)
