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
                {isLast && <Button icon={{name: 'facebook', type: 'font-awesome'}}
                                   borderRadius = {5}
                                   buttonStyle={{marginTop:15}}
                                   backgroundColor={'#4267b2'}
                                   title={"Login with Facebook"}
                                   onPress={onComplete}
                />
                }
            </View>
        )
    }
}

const styles = {
    intro: {
        paddingHorizontal: 20,
        flex:1,
        justifyContent:'flex-end',
        marginBottom:90
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