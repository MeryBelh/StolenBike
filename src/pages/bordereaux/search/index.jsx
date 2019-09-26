import React from 'react';
import { connect } from 'dva';
import BordereauSearchPage from './components/BordereauSearchPage';

const mapStateToProps = ({ bordereauxSearch }) => ({
  bordereaux: bordereauxSearch.bordereaux,
});

export default connect(mapStateToProps)(BordereauSearchPage);
