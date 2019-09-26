import { connect } from 'dva';
import AdherentSearchPage from './components/AdherentSearchPage';


const mapStateToProps = ({ adherentSearch }) => ({
  adherents: adherentSearch.adherents,
});

export default connect(mapStateToProps)(AdherentSearchPage);
