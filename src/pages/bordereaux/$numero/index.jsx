import React from 'react';
import { connect } from 'dva';
import BordereauDetailsPage from './components/BordereauDetailsPage';

const mapStateToProps = ({ bordereauDetails }) => ({
  declarations: bordereauDetails.declarations,
});

export default connect(mapStateToProps)(BordereauDetailsPage);
