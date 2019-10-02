import React from 'react';
import { connect } from 'dva';
import TachesPage from './components/tachesPage';

const mapStateToProps = ({ tachesModel }) => ({
  taches: tachesModel.taches,
  tachesNonAffecte: tachesModel.tachesNonAffecte,
});

export default connect(mapStateToProps)(TachesPage);
