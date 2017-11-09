import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RkButton, RkText} from 'react-native-ui-kitten';
import {connect} from 'react-redux';
import * as counterActions from '../actions/counter';
import {Icon, Button} from 'react-native-elements';

class Schedule extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: "Schedule",
        headerRight: <Button title={"Tour"}
                             backgroundColor="rgba(0,0,0,0)"
                             color="rgba(0,122,255,1)"
                             onPress={() => navigation.navigate('tour')}
        />,
        tabBarIcon: ({tintColor}) => (<Icon name="schedule"
                                            size={30}
                                            color={tintColor}/>)
    });

    increaseNum = () => {
        this.props.increaseNum();
    };

    decreaseNum = () => {
        this.props.decreaseNum();
    };

    render() {
        return (
            <View style={styles.container}>
                <RkButton rkType='success icon' onPress={this.increaseNum}>
                    Increase
                </RkButton>
                <Text>{this.props.counter}</Text>
                <RkButton rkType='dark icon' onPress={this.decreaseNum}>
                    Decrease
                </RkButton>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const mapStateToProps = ({counter}) => ({
    counter
});

export default connect(mapStateToProps, counterActions)(Schedule);