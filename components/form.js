import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Form({addHandler}) {

    const [text, setValue] = React.useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
<TextInput 
style={styles.input} 
onChangeText={onChange} 
placeholder= "Впишите задачу..." />
       <Button
        color="black"
         onPress={() => addHandler(text)}
         title="Добавить задачу"
       />
        </View>
    );
}

const styles = StyleSheet.create(
    {
      input: {
        padding: 20,
        borderBottomWidth: "1px",
        borderBottom: "solid",
        marginTop: 20,
        marginBottom: 20,
        width: "60%",
        marginLeft: "20%",
    },

    }
);
