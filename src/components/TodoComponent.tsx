import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppSelector } from "../hooks";
import Icon from 'react-native-vector-icons/FontAwesome';

function TodoComponent(){
  const todos = useAppSelector( state => state.todoreducer.todos);

    return(
        <View >
      
          <FlatList data={todos} renderItem={ ({item})=> 
          <View style={styles.component}>
              <Text style={{color:"white", fontSize:25, fontWeight:"800", marginBottom:4, borderBottomWidth:2, borderColor:"white", paddingBottom:5}}>{item.title}</Text>
              <Text style={{color:"white", fontSize:16, paddingTop:5}}>{item.desc}</Text>

              <View>
                <Text>
                  <Icon name="check" size={30} color="green"/>
                </Text>
              </View>
          </View>
          } />
             
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
    marginBottom:10,
  }

})

export default TodoComponent;