import React from 'react';
import { connect } from 'dva';
import PecPage from './components/PecPage';

const mapStateToProps = ({ pecDetailRadio }) => ({
  pec: pecDetailRadio.pec,
  prestations: pecDetailRadio.prestations,
  contrat: pecDetailRadio.contrat,
  adherent: pecDetailRadio.adherent,
  beneficiaire: pecDetailRadio.beneficiaire,
  pecSubmitted: pecDetailRadio.pecSubmitted,
  pecGivedUp: pecDetailRadio.pecGivedUp,
  pecValidated: pecDetailRadio.pecValidated,
  pecRejected: pecDetailRadio.pecRejected,
});

export default connect(mapStateToProps)(PecPage);
