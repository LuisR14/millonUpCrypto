import request from '../helpers/requests';

export const loadMoreCrypto = async ({
  setisLoadingMore,
  count,
  setcount,
  search,
}: any): Promise<any> => {
  if (search.length === 0) {
    setisLoadingMore(true);
    try {
      const response = await request.get(
        `/tickers/?start=${count * 100}&limit=100`,
      );
      setcount(count + 1);
      setisLoadingMore(false);
      return response?.data?.data;
    } catch (error: any) {
      setisLoadingMore(false);
      return [];
    }
  }
};
