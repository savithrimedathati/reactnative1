import React ,{ useState } from "react";

import { StyleSheet,Text,Button,View,TextInput} from "react-native";



export default function TodoList(){

    const [text,setText] = useState('');

    return(

        <View>

            <TextInput

            style={styles.input}

             placeholder='add List'

          

             />

             <Button color='skyblue' title='add to list'  />

        </View>

       

    );

}



const styles=StyleSheet.create({

    input:{

       marginBottom:10,

       paddingHorizontal:8,

       paddingVertical:6,

       borderBottomWidth:1,

       borderBottomColor:'#ddd'

    },

});