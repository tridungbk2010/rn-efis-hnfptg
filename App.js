import React from 'react';
import 'rxjs';
// import {StyleSheet, Text, View} from 'react-native';
import Welcome from './src/screens/Welcome';
import Comment from './src/screens/Comment';
import BookingTour from './src/screens/BookingTour';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Font, AppLoading} from 'expo';
import Video from "./src/screens/Video";
import Schedule from "./src/screens/Schedule";
import Auth from "./src/screens/Auth";
import TourDetail from "./src/screens/TourDetail";
import {Provider} from 'react-redux';
import configureStore from './src/store';
const { persistor, store } = configureStore();
import {PersistGate} from 'redux-persist/lib/integration/react';


export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'nun-b': require('./assets/fonts/Nunito-Bold.ttf'),
            'nun': require('./assets/fonts/Nunito-Regular.ttf'),
            'nun-l': require('./assets/fonts/Nunito-Light.ttf'),
            'nun-i': require('./assets/fonts/Nunito-Italic.ttf'),
            'nun-l-i': require('./assets/fonts/Nunito-LightItalic.ttf'),
            'nun-s-b': require('./assets/fonts/Nunito-SemiBold.ttf')
        });

        this.setState({fontLoaded: true});
    }

    render() {
        const MainNavigator = TabNavigator({
                welcome: {screen: Welcome},
                auth: {screen: Auth},
                main: {
                    screen: TabNavigator({
                            bookingTour: {
                                screen: StackNavigator({
                                    bookingTour:{screen:BookingTour},
                                    tour:{screen: TourDetail}
                                })
                            },
                            schedule: {screen: StackNavigator({
                                schedule:{screen:Schedule},
                                tour:{screen: TourDetail}
                                })
                            },
                            video: {screen: Video},
                            comment: {screen: Comment}
                        },
                        {
                            tabBarPosition: 'bottom',
                            swipeEnabled: false,
                            tabBarOptions: {
                                labelStyle: {
                                    fontSize: 11,
                                    fontFamily: 'nun'
                                }
                            }
                        })
                }
            },
            {
                navigationOptions: {
                    tabBarVisible: false
                },
                lazy: true
            });

        return this.state.fontLoaded ? (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                    loading={<AppLoading/>}
                >
                    <MainNavigator/>
                </PersistGate>
            </Provider>
        ) : (<AppLoading/>)
    }
}