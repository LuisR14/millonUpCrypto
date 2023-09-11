/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Modal,
  RefreshControl,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {CryptoProps} from '../../types/crypto';
import styles from './styles';
import {RenderFooter} from '../../components/flatlistFooter';
import CryptoComponent from '../../components/cryptoList';
import Margin from '../../components/margin';
import SearchIcon from '../../assets/icons/search.svg';
import CleanSearchIcon from '../../assets/icons/cleanSearch.svg';
import colors from '../../themes/colors';
import {getCryptoList} from '../../functions/getCryptoList';
import {loadMoreCrypto} from '../../functions/loadMoreCrypto';
import {searchText} from '../../functions/searchText';
import {SkeletonLoader} from '../../components/skeletonLoader';
import {ModalDetailComponent} from '../../components/modalDetail';
import {useDispatch, useSelector} from 'react-redux';
import {
  create,
  createBackup,
  update,
  updateBackup,
} from '../../redux/cryptoListSlice';
import {CryptoListEmpty} from '../../components/cryptoListEmpty';
import {sleep} from '../../functions/sleep';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {filter} from '../../functions/filterCryptoList';
import {saveCryptoList} from '../..//functions/saveCryptoList';
import {getCryptoListSaved} from '../..//functions/getCryptoListSaved';
import {useNetInfo} from '@react-native-community/netinfo';
import {useToast} from 'react-native-toast-notifications';

export const HomeScreen = () => {
  const [cryptoDetail, setcryptoDetail] = useState<CryptoProps>();
  const [isLoading, setisLoading] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoadingMore, setisLoadingMore] = useState(false);
  const [count, setcount] = useState(1);
  const [search, setsearch] = useState('');
  const [modalDetail, setmodalDetail] = useState(false);
  const [blockUpdate, setblockUpdate] = useState(true);
  const [activefilterGainer, setActivefilterGainer] = useState(false);
  const [activefilterLosers, setActivefilterLosers] = useState(false);
  const [activefilterVolume24, setActivefilterVolume24] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const searchRef = useRef<any>();
  const flatListRef = useRef<any>();
  const cryptoList = useSelector((state: any) => state.cryptoList);
  const Settings = useSelector((state: any) => state.userSettings);
  const Theme = Settings?.darkMode;
  const netInfo = useNetInfo();
  const Offline = Settings?.offline;
  const scrollY = useSharedValue(0);
  const toast = useToast();
  useEffect(() => {
    SplashScreen?.hide();
    setisLoading(true);
  }, []);

  useEffect(() => {
    if (netInfo.isConnected !== null) {
      checkCryptoApi();
    }
  }, [netInfo.isConnected]);

  useEffect(() => {
    if (Offline) {
      setblockUpdate(true);
      getSavedCryptoList();
    } else if (!Offline && netInfo.isConnected !== null) {
      setblockUpdate(false);
      checkCryptoApi();
    }
  }, [Offline]);

  useEffect(() => {
    if (errorMsg) {
      toast.show(errorMsg, {
        type: 'danger',
      });
      setErrorMsg(null);
    }
  }, [toast, errorMsg]);

  const checkCryptoApi = async () => {
    cleanFilter();
    if (Offline || netInfo.isConnected === false) {
      getSavedCryptoList();
    } else {
      const cryptoListResponse = await getCryptoList({
        setsearch,
      });
      if (cryptoListResponse?.length > 0) {
        dispatch(create(cryptoListResponse));
        dispatch(createBackup(cryptoListResponse));
        saveCryptoList(cryptoListResponse);
        setblockUpdate(false);
      } else {
        setErrorMsg('server error');
      }
    }
    setisLoading(false);
  };
  const updateCryptoList = async () => {
    const cryptoListUpdate = await loadMoreCrypto({
      setisLoadingMore,
      count,
      setcount,
      search,
    });
    if (cryptoListUpdate.length > 0) {
      dispatch(update(cryptoListUpdate));
      dispatch(updateBackup(cryptoListUpdate));
    } else {
      setErrorMsg('server error');
    }
  };

  const getSavedCryptoList = async () => {
    const list = await getCryptoListSaved();
    dispatch(create(list));
    dispatch(createBackup(list));
  };

  const handler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const scollToTop = () => {
    flatListRef.current.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  const cleanFilter = () => {
    setActivefilterGainer(false);
    setActivefilterLosers(false);
    setActivefilterVolume24(false);
  };

  const keyExtractor = useCallback((item: CryptoProps) => item.id, []);

  const renderItems = useCallback(
    ({item, index}: any) => (
      <TouchableHighlight
        testID="buttonDetailsTest"
        style={styles.touchable}
        activeOpacity={0.6}
        underlayColor="lightgray"
        onPress={() => {
          setcryptoDetail(item);
          setmodalDetail(true);
        }}>
        <CryptoComponent cryptoItem={item} scrollY={scrollY} index={index} />
      </TouchableHighlight>
    ),
    [],
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoading && !isRefreshing ? (
          <SkeletonLoader />
        ) : (
          <>
            <View testID="viewTextInputTest" style={styles.textInputContainer}>
              <TouchableOpacity
                style={styles.touchableIconSearch}
                onPress={() => searchRef.current.focus()}>
                <SearchIcon />
              </TouchableOpacity>
              <TextInput
                testID="textInputTest"
                ref={searchRef}
                style={styles.textInput}
                placeholder="Search coin"
                placeholderTextColor={colors.gray}
                value={search}
                onChangeText={text => {
                  scollToTop();
                  cleanFilter();
                  const cryptoListFilter = searchText({
                    text,
                    setsearch,
                    cryptoList,
                  });
                  if (cryptoListFilter) {
                    dispatch(create(cryptoListFilter));
                  } else {
                    dispatch(create(cryptoList?.listBackup));
                  }
                }}
              />
              {search.length > 0 && (
                <TouchableOpacity
                  style={styles.touchableIconSearch}
                  onPress={() => {
                    setsearch('');
                    dispatch(create(cryptoList?.listBackup));
                  }}>
                  <CleanSearchIcon />
                </TouchableOpacity>
              )}
            </View>
            <Margin bottom={15} />
            <View style={styles.filtersContainer}>
              <TouchableOpacity
                testID="buttonFilterGainers"
                onPress={() => {
                  scollToTop();
                  if (activefilterGainer) {
                    setblockUpdate(false);
                    dispatch(create(cryptoList?.listBackup));
                  } else {
                    setActivefilterLosers(false);
                    setActivefilterVolume24(false);
                    setblockUpdate(true);
                    const filterlist = filter(
                      cryptoList?.listBackup,
                      'gainers',
                    );
                    dispatch(create(filterlist));
                  }
                  setActivefilterGainer(!activefilterGainer);
                }}
                style={{
                  ...styles.filtersButton,
                  backgroundColor: activefilterGainer
                    ? Theme === 'dark'
                      ? colors.white
                      : colors.lightBlue
                    : Theme === 'dark'
                    ? colors.gray
                    : colors.lightGray,
                }}>
                <Text style={styles.textFilters}>Gainers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID="buttonFilterLosers"
                onPress={() => {
                  scollToTop();
                  if (activefilterLosers) {
                    setblockUpdate(false);
                    dispatch(create(cryptoList?.listBackup));
                  } else {
                    setActivefilterGainer(false);
                    setActivefilterVolume24(false);
                    setblockUpdate(true);
                    const filterlist = filter(cryptoList?.listBackup, 'losers');
                    dispatch(create(filterlist));
                  }
                  setActivefilterLosers(!activefilterLosers);
                }}
                style={{
                  ...styles.filtersButton,
                  backgroundColor: activefilterLosers
                    ? Theme === 'dark'
                      ? colors.white
                      : colors.lightBlue
                    : Theme === 'dark'
                    ? colors.gray
                    : colors.lightGray,
                }}>
                <Text style={styles.textFilters}>Losers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID="buttonFilterVolume24"
                onPress={() => {
                  scollToTop();
                  if (activefilterVolume24) {
                    setblockUpdate(false);
                    dispatch(create(cryptoList?.listBackup));
                  } else {
                    setActivefilterLosers(false);
                    setActivefilterGainer(false);
                    setblockUpdate(true);
                    const filterlist = filter(
                      cryptoList?.listBackup,
                      'gainers',
                    );
                    dispatch(create(filterlist));
                  }
                  setActivefilterVolume24(!activefilterVolume24);
                }}
                style={{
                  ...styles.filtersButton,
                  backgroundColor: activefilterVolume24
                    ? Theme === 'dark'
                      ? colors.white
                      : colors.lightBlue
                    : Theme === 'dark'
                    ? colors.gray
                    : colors.lightGray,
                }}>
                <Text style={styles.textFilters}>Volume24h</Text>
              </TouchableOpacity>
            </View>
            <Margin bottom={10} />
            <Animated.FlatList
              testID="flatListTest"
              ref={flatListRef}
              contentContainerStyle={styles.flatlistContainer}
              keyboardDismissMode="on-drag"
              ListEmptyComponent={CryptoListEmpty}
              onScroll={handler}
              maxToRenderPerBatch={40}
              onEndReached={async () => {
                if (!blockUpdate) {
                  setblockUpdate(true);
                  updateCryptoList();
                  await sleep(5000);
                  setblockUpdate(false);
                }
              }}
              onEndReachedThreshold={1}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={() => {
                    setisRefreshing(true);
                    setTimeout(() => {
                      setisRefreshing(false);
                    }, 400);
                    checkCryptoApi();
                  }}
                  title="Refreshing"
                  tintColor={Theme === 'dark' ? colors.white : colors.black}
                  titleColor={Theme === 'dark' ? colors.white : colors.black}
                  colors={
                    Theme === 'dark' ? [colors.lightBlue] : [colors.black]
                  }
                />
              }
              data={cryptoList?.list}
              renderItem={renderItems}
              keyExtractor={keyExtractor}
              ListFooterComponent={() => RenderFooter(isLoadingMore)}
            />
            <Modal
              testID="modalTest"
              style={{
                backgroundColor:
                  Theme !== 'dark' ? colors.white : colors.darkCyan,
              }}
              animationType="slide"
              visible={modalDetail}>
              <ModalDetailComponent
                cryptoItem={cryptoDetail}
                setmodalDetail={setmodalDetail}
              />
            </Modal>
          </>
        )}
      </SafeAreaView>
    </>
  );
};
