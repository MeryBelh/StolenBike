/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { getAccessToken } from '../pages/user/login/utils/utils';

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'New or modified data is successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'The data was deleted successfully.',
  400: 'The request was made with an error and the server did not perform any operations to create or modify data.',
  401: 'User does not have permission (token, username, password is incorrect).',
  403: 'The user is authorized, but access is forbidden.',
  404: 'The request is made for a record that does not exist and the server does not operate.',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will not be retrieved.',
  422: 'A validation error occurred when creating an object.',
  500: 'An error occurred on the server. Please check the server.',
  502: 'Gateway error.',
  503: 'The service is unavailable and the server is temporarily overloaded or maintained.',
  504: 'The gateway timed out.',
};


const errorHandler = error => {
  console.log(error);
  const {
    response = {},
    data: { message },
  } = error;
  const { status } = response;

  if (message && (status === 400 || status === 404)) {
    notification.error({ message });
  }
};
/**
 * 配置request请求时的默认参数
 */

const rootUrls = {
  mock: 'http://localhost:8000/mock',
  local: 'http://localhost:3000',
  //remote: 'http://192.168.1.236:8765/wa/api/v1/dim',
};

// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cE5hbWVzIjpbXSwic3ViIjoiOTYyMiIsInVzZXJfbmFtZSI6Ijk2MjIiLCJzY29wZSI6WyJkaW06KiIsInVhYTphcGk6cmVnaXN0ZXIiLCJ1YWE6YXBpOioiLCJ1YWc6KiJdLCJpc3MiOiJ3ZmE6dWFhOmVudGVycHJpc2UtdXNlciIsImV4cCI6MTU2ODY1MzkwNiwiY29kZUludGVybWVkaWFpcmUiOm51bGwsImF1dGhvcml0aWVzIjpbIlJPTEVfV0FGQV9VU0VSIiwiUk9MRV9TQU5URV9QUkVTVEFUQUlSRSJdLCJqdGkiOiIzYzA4YTY0YS1mOTMzLTQyYmEtYjFkOC1lOWUxOGE2NzVlMDQiLCJlbWFpbCI6Ijk2MjJAV2FmYWFzc3VycmFuY2VkZXYubG9jYWwiLCJjbGllbnRfaWQiOiJ3ZmEud2EuZGltIn0.BpfdmUQC6IILVpFBXoa1NimEJb9C_-GeJd2jXtmb_1B0-BXF-kcw70nv-UY7dFpEUHY2sDO-5ysEXm2P2SH_tvrLiwCCIFp0995H7Kp2N8xyOKLlelvEl8jaxsS0A686RPpWAwXIp2uL1JR1EZaUTck4GSex2_BuObKlOA4pbsG0SLbbNFMuuGZZbRK4DG1hjawAgsSkJDLFVFXQF5V669Vyk2DcH2ai-S0iU35Xviv4_nQVa6aKPo2zKE5XqR21qFJq76WHaI0lFhj-acV7Wi8wbAPjiNZ2Mo4WbZ0G5AfoQuEjs4aZzw_o4EIWcLbmk3kafW0sPvlGyoz9K1k9sA'
const request = () => {
  return extend({
    errorHandler,
    prefix: rootUrls.local,
     headers: { 'Access-Control-Allow-Origin': rootUrls.local },
    // 默认错误处理
    // TODO : remove this comment
    // credentials: 'include', // 默认请求是否带上cookie
  });
};

export default request;
