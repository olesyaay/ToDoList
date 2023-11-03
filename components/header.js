import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
<Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        main: {
          height: '60px',
        backgroundColor: "black",
        },
        text: {
           color: "white",
           textAlign: 'center',
           padding: "10px",
           fontSize: "30px"
        },
    }
)

