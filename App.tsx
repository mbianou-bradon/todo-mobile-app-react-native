/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AddTodoInput from './src/components/AddTodoInput';
import TodoComponent from './src/components/TodoComponent';
import { store } from './src/store/store';





function App(): JSX.Element {
  

  return (
    <Provider store={store}>
        <SafeAreaView>
          <StatusBar/>
          <View style={styles.mainView}>
          <AddTodoInput/>

              <ScrollView>
              
              <TodoComponent />
                  
                
              </ScrollView>
            </View>
            
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: "#fff",
    paddingVertical: 70,
    paddingHorizontal: 25,
    minHeight:"100%", 
    gap:30,
    justifyContent:"center", 
    // alignItems:"center"
  },
  todoView:{

  },

});

export default App;
