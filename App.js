import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryListitem from "./components/CategoryListitem";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Ca1" },
        { id: 2, name: "Ca2" },
        { id: 3, name: "Ca3" },
        { id: 4, name: "Ca4" },
        { id: 5, name: "Ca5" },
        { id: 6, name: "Ca6" },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <View>
        {/* <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}> */}
          {/* {categories.map((category) => (
            <CategoryListitem key={category.id} category = {category}/>
          ))} */}
          <FlatList 
          data={categories}
          renderItem={({item}) => <CategoryListitem category={item}/>}
          keyExtractor={item => '${item.id}'}
          contentContainerStyle={{paddingLeft: 16, paddingRight: 16 }}
          />
        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "700",
  },
});
