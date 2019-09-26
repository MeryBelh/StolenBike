import React from 'react';

import { connect } from 'dva';

import ReglementsBloquePage from './components/ReglementsBloquePage';

const mapStateToProps = ({ reglementsBloqueSearch }) => ({
  reglementsBloque: reglementsBloqueSearch.reglementsBloque,
});

export default connect(mapStateToProps)(ReglementsBloquePage);
