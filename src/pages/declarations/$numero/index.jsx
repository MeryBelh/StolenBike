import React from 'react';
import { connect } from 'dva';
import DeclarationDetailsPage from './components/DeclarationDetailsPage';

const mapStateToProps = ({ declarationDetails }) => ({
  declaration: declarationDetails.declaration,
  prestations: declarationDetails.prestations,
  acteMedicaux: declarationDetails.acteMedicaux,
  correspondances: declarationDetails.correspondances,
  reclamationModal: declarationDetails.reclamationModal,
});

export default connect(mapStateToProps)(DeclarationDetailsPage);
