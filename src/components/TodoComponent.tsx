import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppSelector } from "../hooks";


function TodoComponent(){
  const todos = useAppSelector( state => state.todoreducer.todos);

    return(
        <View style={styles.component}>
              <Text style={{color:"white"}}>
                      <FlatList data={todos} renderItem={ ({item})=> <Text>{item.title}</Text>} />
              </Text>
        </View>
    )

}


const styles = StyleSheet.create({
  component: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical:25,
    backgroundColor: "rgb(255,90,90)",
    borderRadius:10,
    marginBottom:4
  }

})

export default TodoComponent;