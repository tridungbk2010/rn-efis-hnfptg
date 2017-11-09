import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Indicator = ({activeColor, color}) => {
    const normalColor = color || "#d0d0d0";
    return (<View style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal:2,
        backgroundColor: activeColor ? '#4CAF50' : normalColor
    }}/>)
};


Indicator.propTypes = {
    activeColor: PropTypes.bool,
    color: PropTypes.string
};

export default Indicator;