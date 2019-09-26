import React from 'react';
import { connect } from 'dva';
import DetailsContratPage from './components/DetailsContratPage';

const mapStateToProps = ({ contratDetails }) => ({
  avenants: contratDetails.avenants,
  prestations: contratDetails.prestations,
  clauses: contratDetails.clauses,
  primes: contratDetails.primes,
});

export default connect(mapStateToProps)(DetailsContratPage);
