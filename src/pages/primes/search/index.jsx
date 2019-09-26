import React from 'react';
import { connect } from 'dva';
import PrimesSearchPage from './components/PrimesSearchPage';

const mapStateToProps = ({ primesSearch }) => ({
  primes: primesSearch.primes,
});

export default connect(mapStateToProps)(PrimesSearchPage);
