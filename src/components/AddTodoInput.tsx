import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { todoSlice } from "../features/createTodoSlice";
import { useAppDispatch } from "../hooks";


//   const [todo, setTodo] = useState("")


 function AddTodoInput(): JSX.Element {

const dispatch = useAppDispatch();
const [todoTitle, setTodoTitle] = useState("");
const [todoDescription, setTodoDescription] = useState("");
const handleSubmit = () => {
    dispatch(todoSlice.actions.createTodo({title: todoTitle, desc: todoDescription, status: false}));
}

    return(
        <>
        <View>
            <Text style={{fontSize:30, fontWeight: "800", textAlign:"center", color:"#124247", marginBottom:15}}>
                Plan Your Day
            </Text>
        </View>
        <View style={{marginBottom:40}}>
            <TextInput style={styles.textInput} placeholder='Task Title' onChangeText={(title)=> setTodoTitle(title)}/>
            <TextInput id="todoDesc" style={styles.textInput} placeholder='Task Description' onChangeText={(desc)=> setTodoDescription(desc)}/>
            <Pressable style={styles.pressableStyle} onPress={handleSubmit}>
                <Text style={{color:"white", fontWeight:"800"}}>
                    ADD TASK
                </Text>
            </Pressable>
        
        </View>
        
        
        </>
    )
}


const styles = StyleSheet.create({
 
  todoView:{

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 20,
    borderRadius: 10,
  },
  pressableStyle: {
    backgroundColor: "rgb(90,90,255)",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    
  }, 
});

export default AddTodoInput;