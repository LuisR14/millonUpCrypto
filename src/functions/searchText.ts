export const searchText = ({text, setsearch, cryptoList}: any) => {
  setsearch(text);
  if (text?.length > 0) {
    const cryptoListFilter = cryptoList.listBackup?.filter(
      (item: any) =>
        (item?.nameid?.indexOf(text.toLowerCase()) !== -1 &&
          item?.nameid?.indexOf(text.toLowerCase()) !== undefined) ||
        (item?.symbol?.toLowerCase().indexOf(text.toLowerCase()) !== -1 &&
          item?.symbol?.toLowerCase().indexOf(text.toLowerCase()) !==
            undefined),
    );
    return cryptoListFilter;
  } else {
    return null;
  }
};
