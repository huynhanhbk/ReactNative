import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListitem from './components/CategoryListitem';
import React from 'react';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRUNG TÂM BẢO TỒN DI SẢN VĂN HOÁ HỘI AN</Text>
      <CategoryListitem />
      <CategoryListitem />
      <CategoryListitem />
      
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 50,
    fontSize: 30,
    fontWeight: '700'
  },
});
