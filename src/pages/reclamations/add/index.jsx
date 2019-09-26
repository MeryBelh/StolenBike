import React from 'react';
import { connect } from 'dva';
import AddReclamationPage from './components/AddReclamationPage';

const mapStateToProps = ({ reclamations }) => ({});

export default connect(mapStateToProps)(AddReclamationPage);
