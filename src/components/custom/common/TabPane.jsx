import { Tabs } from 'antd';
import { getAuthority } from '../../../utils/authority';

class TabPane extends Tabs.TabPane {
  render() {
    const { deniedFor } = this.props;
    const authorites = getAuthority();
    const isDenied =
      deniedFor && deniedFor.filter(denied => authorites.includes(denied)).length > 0;

    console.log('isDenied', isDenied);
    if (isDenied) return null;

    return super.render();
  }
}

export default TabPane;
