import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

export default function Button({bgColor,btnLabel,textColor,Press}){
    return(
        <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor:bgColor,
            borderRadius:100,
            alignItems:'center',
            width:'100%',
            paddingVertical:5,
            marginVertical:10
        }}>
            <Text style={{color:textColor,fontSize:28,fontWeight:'bold'}}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}