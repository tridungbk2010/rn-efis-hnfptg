import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Tour = ({imgUrl, title, price, type, desc, duration}) => {
    return (
        <View style={styles.container}>
            <Image source={imgUrl}
                   resizeMode='cover'
                   style={styles.img}
            />
            <View style={price ? styles.label : styles.labelFree}>
                <Text style={price ? styles.dollar : styles.free}>
                    {price ? `$${price}` : "Free"}
                </Text>
            </View>
            <View style={styles.rightContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.type}>{`Type: ${type}`}</Text>
                <View style={styles.groupDuration}>
                    <Icon name="clock-o" size={12}
                          color={"#222"}
                          type='font-awesome'/>
                    <Text style={styles.duration}>{`Duration: ${duration}`}</Text>
                </View>
                <Text style={styles.desc}>
                    {desc}
                </Text>

            </View>

        </View>
    )
};

const styles = {
    container: {
        flexDirection: 'row',
        // alignItems:'flex-start',
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: .1
    },
    img: {
        width: SCREEN_WIDTH/2 - 10,
        height: (SCREEN_WIDTH/2 - 10)*132/165
    },
    rightContent: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        fontFamily: 'nun-b'
    },
    dollar: {
        fontFamily: 'nun-b',
        fontSize: 14,
        color: '#F44336',
        backgroundColor: 'transparent'
    },
    label: {
        position: 'absolute',
        left: 10,
        top: 10,
        backgroundColor: 'rgba(255,255,255, .9)',
        borderRadius: 5,
        paddingHorizontal: 4,
        height: 21
    },
    labelFree: {
        position: 'absolute',
        left: 10,
        top: 10,
        backgroundColor: '#8BC34A',
        borderRadius: 5,
        paddingHorizontal: 4,
        height: 21
    },
    free: {
        fontFamily: 'nun-b',
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'transparent'
    },
    groupDuration: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    type: {
        marginTop: 4,
        fontFamily: 'nun',
        fontSize: 12
    },
    duration: {
        fontFamily: 'nun',
        marginLeft: 4,
        fontSize: 12
    },
    desc: {
        marginTop: 15,
        fontFamily: 'nun-l',
        fontSize: 12,
        width: `60%`
    }

};


Tour.propTypes = {
    imgUrl: PropTypes.number,
    price: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    desc: PropTypes.string
};

export default Tour;