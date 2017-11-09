import React,{Component} from 'react';
import _ from 'lodash';
// import {ScrollView, View, Text} from 'react-native';
import Swipe from '../components/Swipe';
import {AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';

class Welcome extends Component{
    state = {token: null};

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.props.navigation.navigate('main');
            this.setState({token});
        } else {
            this.setState({token: false});
        }
    }

    onComplete = () => this.props.navigation.navigate('auth');
    render(){
        if(_.isNull(this.state.token)){
            return (<AppLoading />);
        }
        return (
            <Swipe onComplete={this.onComplete} />
        )
    }
}


export default Welcome;