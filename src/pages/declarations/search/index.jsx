import React from 'react';
import { connect } from 'dva';
import DeclarationSearchPage from './components/DeclarationSearchPage';

const mapStateToProps = ({ declarationSearch }) => ({
  declarations: declarationSearch.declarations,
});

export default connect(mapStateToProps)(DeclarationSearchPage);
