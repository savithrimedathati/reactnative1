import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button } from "react-native";

export default function TextInputDemo() {
  const [number, setNumber] = useState([]);
  const [numbers, setNumbers] = useState([]);

  return (

    <View style={styles.container}>

      <Text>Enter Number:</Text>

      <TextInput

      textContentType="telephoneNumber"

        style={styles.input}

        placeholder="1"

        keyboardType="numeric"

        onChangeText={(e) => setNumber(e)}

      />



      <Text>Enter Number:</Text>

      <TextInput

     textContentType="telephoneNumber"

        style={styles.input}

        placeholder="2"

        onChangeText={(e) => setNumbers(e)}

      />
  

 <Text>Result:</Text>

      <TextInput

     textContentType="none"

        style={styles.input}

        placeholder="0"

        onChangeText={(e) => setNumbers(e)}

      />

      <Button style={styles.button} title="Add" color="skyblue"

       onPress={() => { }} /><br></br>

    



       

     <Button style={styles.button} title="sub" color="skyblue" 

     onPress={() => { }} /><br></br>

     </View>
  );
}


     const styles = StyleSheet.create({

    input: {

        borderWidth: 2,

        borderColor: "Blue",

        padding: 30,

        margin: 40,

        width: 300,

       

      },

      button:{

        alignItems: 'center',

        justifyContent: 'center',

        paddingVertical: 14,

        paddingHorizontal: 35,

        borderRadius: 4,

        elevation: 4,

     

          

          

          

      }

    });