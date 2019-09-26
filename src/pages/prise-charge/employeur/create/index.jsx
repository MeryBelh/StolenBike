import React from 'react'
import {connect} from 'dva';
import CreatePage from './components/CreatePage';

const mapStateToProps = ({ createPec }) => ({
  pecId: createPec.pecId,
   adherent: createPec.adherent,
  beneficiaire: createPec.beneficiaire,
  contrat: createPec.contrat,
  typePrestataire: createPec.typePrestataire,
    villes: createPec.villes,
  prestataires: createPec.prestataires,


});

export default connect(mapStateToProps)(CreatePage);

