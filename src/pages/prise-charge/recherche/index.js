import { connect } from 'dva';
import SearchPage from '@/pages/prise-charge/recherche/components/SearchPage';

const mapStateToProps = ({ pecSearch }) => ({ ...pecSearch });

export default connect(mapStateToProps)(SearchPage);
