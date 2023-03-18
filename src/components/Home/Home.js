import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BankItem from './components/BankItem';
import { getBanksLoading } from '../../state/features/bank/reducers';
import { getData } from '../../storage';


const Home = () => {

  const dispatch = useDispatch();
  const bankState = useSelector(state => state.bank.getBanks);

  useEffect(() => {
     dispatch(getBanksLoading())
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <BankItem index={index} item={item} />
    )
  }
  const ListFooterComponent = () => {
    return (

      <View>
        {
           bankState.isLoading
           &&
           <ActivityIndicator style={styles.activityIndicator} color={'blue'} />
        }
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={bankState.banks}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})