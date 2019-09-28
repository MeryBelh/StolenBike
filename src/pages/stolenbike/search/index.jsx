import React from 'react';
import { connect } from 'dva';
import StolenBikeCasePage from './components/StolenBikeCasePage';

const mapStateToProps = ({ stolenBikeCases }) => ({
    stolenBikeCase: stolenBikeCases.stolenBikeCase,
});

export default connect(mapStateToProps)(StolenBikeCasePage);
