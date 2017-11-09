import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS} from "./actionTypes";
import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';

export const facebookLogin = () => async dispatch => {
    console.log("facebookLogin");
    let token = await AsyncStorage.getItem('fb_token');
    console.log("fb_token", token);
    if (token) {
        dispatch({type: FACEBOOK_LOGIN_SUCCESS, token});
    } else {
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('174789403038763', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({type: FACEBOOK_LOGIN_FAIL});
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, token});
};