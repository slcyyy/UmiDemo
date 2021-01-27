import {request} from 'umi' //使用umi内置的request
export const getRemoteList = async () => {
  //因为effect接收的是一个函数，而不是这个函数执行后的一个返回值，yield后面才执行这个函数呢
  // umi做了一个代理服务器的概念，帮助我们跨域了
  return request('/api/users', {
    method: 'get',
  })
    .then(function(response) {
      // console.log(response);
      return response
    })
    .catch(function(error) {
      console.log(error);
    });
}
