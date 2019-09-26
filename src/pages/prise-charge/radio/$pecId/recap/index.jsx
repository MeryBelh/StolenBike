import React from 'react';
import RecapPage from './components/RecapPage';
import {connect} from 'dva';

const mapStateToProps = ({ pecDetailRadio }) => ({
  pec: pecDetailRadio.pec,
  prestations: pecDetailRadio.prestations,
  contrat: pecDetailRadio.contrat,
  adherent: pecDetailRadio.adherent,
  beneficiaire: pecDetailRadio.beneficiaire,
  pecValidated: pecDetailRadio.pecValidated,
  pecRejected: pecDetailRadio.pecRejected,
});

export default connect(mapStateToProps)(RecapPage)
