import {AsyncStorage} from 'react-native';
import {FACEBOOK_LOGIN} from "../actions/actionTypes";

export const facebookLoginEpic = action$ => action$
    .ofType(FACEBOOK_LOGIN);
