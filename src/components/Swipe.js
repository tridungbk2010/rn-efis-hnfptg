import React, {Component} from 'react';
import {
    ScrollView, View, Text, Dimensions, Animated, Easing, Image
    , TouchableOpacity
} from 'react-native';
import Intro from './Intro';
import PropTypes from 'prop-types';
import Indicator from './Indicator';

const intro0 = require('../../assets/images/login_bg.png');
const intro1 = require('../../assets/images/cover-hnftpg.png');
const intro2 = require('../../assets/images/efis.png');

const DATA = [
    {
        id: 1,
        title: "Welcome to \n Hanoi Free Private Tour Guide",
        imgUrl: intro0
    },
    {
        id: 2,
        title: "Welcome to EFIS English Class",
        imgUrl: intro1
    },
    {
        id: 3,
        title: "Let's go to the App",
        imgUrl: intro2
    }
];

const SCREEN_WIDTH = Dimensions.get('window').width;

class Swipe extends Component {
    state = {
        isLast: false,
        activeIndicator: 0,
        opacity: new Animated.Value(1)
    };

    onMomentumScrollEnd = ({nativeEvent}) => {
        const {x} = nativeEvent.contentOffset;
        const pageIndex = x / SCREEN_WIDTH;
        const {activeIndicator} = this.state;
        this.setState({
            isLast: pageIndex === DATA.length - 1,
            activeIndicator: activeIndicator !== pageIndex ? pageIndex : activeIndicator
        });
        if (pageIndex === DATA.length - 1) {
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 300,
                ease: Easing.easeOut
            }).start();
        } else {
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 300,
                ease: Easing.easeOut
            }).start();
        }
    };

    render() {
        const {opacity, activeIndicator} = this.state;
        const {onComplete} = this.props;
        const width = this.state.opacity.interpolate({
            inputRange:[0,1],
            outputRange:[0, 100]
        });
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onMomentumScrollEnd}
                >
                    {
                        DATA.map((intro, i) => <Image key={intro.id}
                                                      style={styles.wrapImg}
                                                      source={intro.imgUrl}
                                                      resizeMode='cover'
                        >
                            <Intro
                                urlImg={intro.imgUrl}
                                isLast={i === DATA.length - 1}
                                onComplete={onComplete}
                                title={intro.title}/>
                        </Image>)
                    }

                </ScrollView>
                <View style={styles.viewButton}>
                    <View style={styles.indicators}>
                        {
                            DATA.map((item, i) => <Indicator key={item.id}
                                                             activeColor={i === activeIndicator}/>)
                        }
                    </View>
                    <Animated.View style={{
                        opacity,
                        width,
                        marginLeft: 10
                    }}>
                        <TouchableOpacity style={styles.button}
                                          onPress={onComplete}>
                            <Text style={styles.textButton}>Skip</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    wrapImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: '100%'
    },
    viewButton: {
        position: 'absolute',
        zIndex: 9,
        bottom: 10,
        left: `44%`,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    indicators: {
        flexDirection: 'row'
    },
    button: {
        borderRadius: 5,
        height: 25,
        width: 60,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontFamily: 'nun',
        fontSize: 12,
        color: "#fff",
        backgroundColor: 'transparent'
    }
};

Swipe.propTypes = {
    onComplete: PropTypes.func
};

export default Swipe;