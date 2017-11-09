import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as auth_actions from '../actions/auth_actions';

class Auth extends Component {
    componentDidMount(){
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }

    onAuthComplete = props => {
        console.log(props.token);
        if(props.token){
            this.props.navigation.navigate('main');
        }
    };

    render() {
        console.log("Auth", this.props.token);
        return (
            <View style = {styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
};

const mapStateToProps = ({auth}) => {
    console.log(auth);
   return{
       token:auth.token
   }
};

export default connect(mapStateToProps, auth_actions)(Auth);