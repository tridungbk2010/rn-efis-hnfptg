import React,{Component} from 'react';
// import {ScrollView, View, Text} from 'react-native';
import Swipe from '../components/Swipe';

class Welcome extends Component{
    onComplete = () => this.props.navigation.navigate('main');
    render(){
        return (
            <Swipe onComplete={this.onComplete} />
        )
    }
}


export default Welcome;