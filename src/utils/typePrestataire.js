export default autorities => {
  if (autorities.includes("LABORATOIRES D'ANALY")) return 'laboratoire';

  if (autorities.includes('ROLE_SANTE_INTERMEDIAIRE')) return 'employeur';

  if (autorities.includes('CABINET DE RADIOLOGI')) return 'radio';

  if (autorities.includes('ROLE_SANTE_BACK_OFFICE')) return 'company';

  return null;
};
