import React from 'react';
import { connect } from 'dva';

import AdherentDetailsPage from './components/AdherentDetailsPage';

const mapStateToProps = ({ adherentDetails }) => ({
  beneficiaires: adherentDetails.beneficiaires,
  adherentHistoriques: adherentDetails.adherentHistoriques,
  adherent: adherentDetails.adherent,
});

export default connect(mapStateToProps)(AdherentDetailsPage);
