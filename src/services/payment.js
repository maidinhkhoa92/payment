import request from 'utils/request';

const Payment = params => {
  return request({
    url: '/payment',
    method: 'post',
    data: params
  });
};

export { Payment };
