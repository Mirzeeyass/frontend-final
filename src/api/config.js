let baseURL = 'abdcoderview.herokuapp.com';
//let baseURL = 'localhost:8000';
let httpPrefix = 'https://';
let wsPrefix = 'ws://';
if (process.env.NODE_ENV === 'development') {
  //baseURL = 'localhost:8000';
  baseURL = 'abdcoderview.herokuapp.com';
  httpPrefix = 'https://';
  wsPrefix = 'ws://';
}

export default {
  http: {
    baseURL: `${httpPrefix}${baseURL}/api`,
  },
  ws: {
    baseURL: `${wsPrefix}${baseURL}/ws`,
  },
};