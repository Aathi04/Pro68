import * as React from 'react';
import {View, Text} from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:"blue", fontWeight:'bold', fontSize: 26}}>Facebook</Text>
            </View>
        );
    }
}