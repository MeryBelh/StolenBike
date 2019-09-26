import React from 'react'
import {connect} from 'dva';
import CreatePage from './components/CreatePage';

const mapStateToProps = ({ createPec }) => ({
  pecId: createPec.pecId,
   adherent: createPec.adherent,
  beneficiaire: createPec.beneficiaire,
  contrat: createPec.contrat,
  pathologies: createPec.pathologies,
  baremes: createPec.baremes,
  estimation: createPec.estimation,

});

export default connect(mapStateToProps)(CreatePage);

