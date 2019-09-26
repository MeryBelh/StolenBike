import globalHeader from './fr-FR/globalHeader';
import menu from './fr-FR/menu';
import settingDrawer from './fr-FR/settingDrawer';
import settings from './fr-FR/settings';
import pwa from './fr-FR/pwa';
import component from './fr-FR/component';

export default {
  'navBar.lang': 'Langues',
  'layout.user.link.help': 'Aide',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
