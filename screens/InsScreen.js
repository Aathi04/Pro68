import * as React from 'react';
import {View, Text} from 'react-native';

export default class InsScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:"red", fontWeight:'bold', fontSize: 26}}>Instagram</Text>
            </View>
        );
    }
}