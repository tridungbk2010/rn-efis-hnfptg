import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';

class Intro extends Component {
    render() {
        const {title, isLast, onComplete} = this.props;
        return (
            <View style={styles.intro}>
                <Text style={styles.text}>{title}</Text>
                {isLast && <Button
                    borderRadius={5}
                    backgroundColor={"#8BC34A"}
                    containerViewStyle={{
                        marginTop: 25
                    }}
                    title={"Onwards"} onPress={onComplete}
                />
                }
            </View>
        )
    }
}

const styles = {
    intro: {
        paddingHorizontal: 20
    },
    text: {
        color: '#fff',
        fontFamily: 'nun',
        backgroundColor: 'transparent',
        fontSize: 32,
        textAlign: 'center'
    }
};

Intro.propTypes = {
    title: PropTypes.string,
    isLast: PropTypes.bool,
    bgColor: PropTypes.string,
    imgUrl: PropTypes.string,
    onComplete: PropTypes.func
};

export default Intro;