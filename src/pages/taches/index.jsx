import React from 'react';
import { connect } from 'dva';
import TachesPage from './components/tachesPage';

const mapStateToProps = ({ tachesModel }) => ({
  taches: tachesModel.taches,
});

export default connect(mapStateToProps)(TachesPage);
