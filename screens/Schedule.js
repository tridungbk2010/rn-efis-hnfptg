import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

class Schedule extends Component {
    static navigationOptions = {
        tabBarLabel: "Schedule",
        tabBarIcon: ({tintColor}) => (<Icon name="schedule"
                                            size={30}
                                            color={tintColor}/>)
    };

    render() {
        return (
            <View>
                <Text>comment</Text>
            </View>
        )
    }
}


export default Schedule;