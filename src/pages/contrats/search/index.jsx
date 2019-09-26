import { connect } from 'dva';
import SearchContratPage from './components/SearchContratsPage';

const mapStateToProps = ({ contratSearch }) => ({
  contrats: contratSearch.contrats,
});

export default connect(mapStateToProps)(SearchContratPage);
