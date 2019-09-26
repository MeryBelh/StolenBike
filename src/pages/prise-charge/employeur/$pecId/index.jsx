import React from 'react';
import { connect } from 'dva';
import PecPage from './components/PecPage';

const mapStateToProps = ({ pecDetail }) => ({
  pec: pecDetail.pec,
  contrat: pecDetail.contrat,
  adherent: pecDetail.adherent,
  beneficiaire: pecDetail.beneficiaire,
  pecSubmitted: pecDetail.pecSubmitted,
  pecGivedUp: pecDetail.pecGivedUp,
  pecValidated: pecDetail.pecValidated,
  pecRejected: pecDetail.pecRejected,
  prestataire: pecDetail.prestataire,
});

export default connect(mapStateToProps)(PecPage);
