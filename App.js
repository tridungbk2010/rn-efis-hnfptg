import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import Welcome from './screens/Welcome';
import Comment from './screens/Comment';
import BookingTour from './screens/BookingTour';
import {TabNavigator} from 'react-navigation';
import {Font, AppLoading} from 'expo';
import Video from "./screens/Video";
import Schedule from "./screens/Schedule";

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
                main: {
                    screen: TabNavigator({
                            bookingTour: {screen: BookingTour},
                            schedule: {screen: Schedule},
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
            <MainNavigator/>
        ) : (<AppLoading/>)
    }
}