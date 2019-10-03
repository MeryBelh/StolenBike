/* eslint no-useless-escape:0 import/prefer-default-export:0 */

import { getAuthority } from './authority';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = path => {
  return reg.test(path);
};

const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; 

const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};

const applyPolicy = fields => {
  const authority = getAuthority();
  return fields.filter(
    field =>
      !(field.deniedFor && field.deniedFor.filter(denied => authority.includes(denied)).length > 0),
  );
};

export { applyPolicy, isAntDesignProOrDev, isAntDesignPro, isUrl };
