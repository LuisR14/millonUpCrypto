import {CryptoProps} from 'src/types/crypto';

export const filter = (cryptoList: CryptoProps[], option: string) => {
  let filterList = [];
  if (option === 'gainers') {
    filterList = [...cryptoList]
      .sort(
        (a, b) =>
          parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h),
      )
      .filter(
        (item: CryptoProps) => parseFloat(item.percent_change_24h) >= 0.0,
      );
  } else if (option === 'losers') {
    filterList = [...cryptoList]
      .sort(
        (a, b) =>
          parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h),
      )
      .filter((item: CryptoProps) => parseFloat(item.percent_change_24h) < 0.0);
  } else {
    filterList = [...cryptoList].sort((a, b) => b.volume24 - a.volume24);
  }
  return filterList;
};
