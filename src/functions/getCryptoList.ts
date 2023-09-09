import request from '../helpers/requests';

export const getCryptoList = async ({setsearch}: any) => {
  setsearch('');
  try {
    const response = await request.get('/tickers');
    return response?.data?.data;
  } catch (error: any) {
    return [];
  }
};
