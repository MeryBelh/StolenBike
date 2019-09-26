// 代码中会兼容本地 service _mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'Anass Znayti',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'a.znayti@wafaassurance.co.ma',
    signature: 'Anass Z.',
    title: 'Chef de projet',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'Morocco',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;

    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (password === 'ant.design' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};

const token_intermediaire = {
  access_token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cE5hbWVzIjpbXSwic3ViIjoiOTEwNiIsInVzZXJfbmFtZSI6IjkxMDYiLCJzY29wZSI6WyJkaW06KiIsInVhYTphcGk6cmVnaXN0ZXIiLCJ1YWE6YXBpOioiLCJ1YWc6KiJdLCJpc3MiOiJ3ZmE6dWFhOmVudGVycHJpc2UtdXNlciIsImV4cCI6MTU2NjkzMDIwMiwiY29kZUludGVybWVkaWFpcmUiOm51bGwsImF1dGhvcml0aWVzIjpbIlJPTEVfV0FGQV9VU0VSIiwiUk9MRV9TQU5URV9JTlRFUk1FRElBSVJFIl0sImp0aSI6ImYyOWU4NjdmLTA0NGEtNDBkMC05NDdjLTEyYTlmMGMzOTJmMSIsImVtYWlsIjoiOTEwNkBXYWZhYXNzdXJyYW5jZWRldi5sb2NhbCIsImNsaWVudF9pZCI6IndmYS53YS5kaW0ifQ.IDEcSz_k3IF18MUDhgRMNmrc0aLOZMJzjG6iYUdacnc75aeTRigdw1KJx7a2oJYwctvzqhTiDyMybywtLmY4s1zKRsJfWjqeqFlarXJL6f0jqpL9PVGilMKTs-FyTZCIF721omWcxnb4AB4nvEKojIAvEIbvCdRFf6Js9U8h3KojLv3PYk4GyM43Zeolc_cSNsRwxEfAL0OTmDQ3HRixKkEX3m1f2PtAa4xKjhPA84JBxIlAVClu-7fn4ddMNEJ13dKdjcS1CIT_dK9QQE31pmM9Hp9tdKHAIOf6Pr6gQvwAI971qeWhOiaXHhlnuhaZKEyxJFK4cp6N7XtTG9JY_g',
  token_type: 'bearer',
  refresh_token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cE5hbWVzIjpbXSwic3ViIjoiOTEwNiIsInVzZXJfbmFtZSI6IjkxMDYiLCJzY29wZSI6WyJkaW06KiIsInVhYTphcGk6cmVnaXN0ZXIiLCJ1YWE6YXBpOioiLCJ1YWc6KiJdLCJhdGkiOiJmMjllODY3Zi0wNDRhLTQwZDAtOTQ3Yy0xMmE5ZjBjMzkyZjEiLCJpc3MiOiJ3ZmE6dWFhOmVudGVycHJpc2UtdXNlciIsImV4cCI6MTU2NzAxMzAwMiwiY29kZUludGVybWVkaWFpcmUiOm51bGwsImF1dGhvcml0aWVzIjpbIlJPTEVfV0FGQV9VU0VSIiwiUk9MRV9TQU5URV9JTlRFUk1FRElBSVJFIl0sImp0aSI6ImEwNzdlODFjLTMyNjctNGY3NC1hYzg3LWMyNDQ0YjNlMDQyNiIsImVtYWlsIjoiOTEwNkBXYWZhYXNzdXJyYW5jZWRldi5sb2NhbCIsImNsaWVudF9pZCI6IndmYS53YS5kaW0ifQ.UKDS1-bmRs-0t8qXlG1Zf799hh_rdWo1joTINiFx9RywTJKd7kQ_fgV1D147lAq3KYsbfYltyOwlhaI7FN1putejJGRNaJNtucrHI7ef2moCDkMqQUlOz9y8xbS1an4OCR4EunnSJCEuy8oN-pHpnc7uPSQZvlFaNTjqIcewKJ0ibRU7pNIvWkh_IkcMUBOAhkH8lv9vHSDLMARZp-PhZnGnloxq54WecB9Cv1vKuadc47Mcj9-vKDiHgF5h4ykuu8zsBQHvEWzH9NqMsY7RwWHDWbwI1kstmY6ai_Z0Q7kZlEoP_qJPY-7a4SSRgrKOpYjzIU2gnw0opIWs9aY8tQ',
  expires_in: 3599,
  scope: 'dim:* uaa:api:register uaa:api:* uag:*',
  groupNames: [],
  sub: '9106',
  iss: 'wfa:uaa:enterprise-user',
  codeIntermediaire: null,
  email: '9106@Wafaassurrancedev.local',
  jti: 'f29e867f-044a-40d0-947c-12a9f0c392f1',
};
