import React from 'react';
import { connect } from 'dva';
import ReclamationsSearchPage from './components/ReclamationsSearchPage';

const mapStateToProps = ({ reclamationsSearch }) => ({
  reclamations: reclamationsSearch.reclamations,
});

export default connect(mapStateToProps)(ReclamationsSearchPage);
