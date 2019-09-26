import React from 'react';
import { connect } from 'dva';

import StolenBikeForm from './components/StolenBikeForm';

const mapStateToProps = ({ reglementsBloqueSearch }) => ({
 // reglementsBloque: reglementsBloqueSearch.reglementsBloque,
});

export default connect(mapStateToProps)(StolenBikeForm);
