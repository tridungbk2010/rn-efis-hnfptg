import React,{Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Icon} from 'react-native-elements';

class TourDetail extends Component{
    static navigationOptions = {
        headerStyle: {marginTop: Platform.OS === "android" ? 24 : 0}
    };
    render(){
        return (
            <View>
                <Text>Tour detail</Text>
            </View>
        )
    }
}


export default TourDetail;