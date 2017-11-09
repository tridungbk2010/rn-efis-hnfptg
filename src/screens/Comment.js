import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

class Comment extends Component {
    static navigationOptions = {
        tabBarLabel: "Comment",
        tabBarIcon: ({tintColor}) => (<Icon name="comment"
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


export default Comment;