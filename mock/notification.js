const notifications = [
  {
    id: 22,
    userId: '9106',
    roleName: 'ROLE_SANTE_INTERMEDIAIRE',
    content: 'message',
    readed: 'N',
  },
  {
    id: 25,
    userId: '9106',
    roleName: 'ROLE_SANTE_INTERMEDIAIRE',
    content: 'message',
    readed: 'N',
  },
  {
    id: 28,
    userId: '9106',
    roleName: 'ROLE_SANTE_INTERMEDIAIRE',
    content: 'message',
    readed: 'N',
  },
  {
    id: 30,
    userId: '9106',
    roleName: 'ROLE_SANTE_INTERMEDIAIRE',
    content: null,
    readed: 'N',
  },
];

export default {
  'POST /mock/corbeil/notifications': notifications,
  'GET /mock/corbeil/22/lireNotification': null,
};
