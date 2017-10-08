import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Icon, Button, Header, SearchBar} from 'react-native-elements';
import Tour from '../components/Tour';

class BookingTour extends Component {
    static navigationOptions = {
        tabBarLabel: "Tours",
        tabBarIcon: ({tintColor}) => (<Icon name="suitcase"
                                            size={30}
                                            type={'font-awesome'}
                                            color={tintColor}/>)
    };

    render() {
        return (
            <View>
                <ScrollView
                    style={styles.mainView}>
                    {
                        PLACES.map(tour => <Tour key={tour.id}
                                                 duration={tour.duration}
                                                 desc={tour.desc}
                                                 type={tour.type}
                                                 price={tour.fee}
                                                 imgUrl={tour.url}
                                                 title={tour.name}
                        />)
                    }
                    <Tour/>
                </ScrollView>
            </View>

        )
    }
}

const styles = {
    mainView: {
        paddingHorizontal: 15,
        marginTop:30
        // flex: 1,
        // justifyContent: 'space-between',
        // paddingHorizontal: 10,
        // alignItems: 'stretch'
    },
    headline:{
        // height:33,
        marginTop:20,
        marginBottom:10
    },
    headlineText:{
      fontFamily:'nun-b',
      fontSize:30
    },
    viewText: {
        marginVertical: 3,
        backgroundColor: 'transparent'
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
        fontFamily: 'nun-b'
    }
};

export default BookingTour;

const PLACES = [
    {
        id: 0,
        name: 'Hoan Kiem Lake',
        fee: 0,
        type: 'City walking',
        desc: 'This is a sample name of service that is very very long',
        duration: '2h',
        url: require('../assets/images/turtle-tower.jpeg')
    },
    {
        id: 1,
        name: 'Sapa',
        fee: 129,
        desc: 'This is a sample name of service that is very very long',
        type: 'Long trip',
        duration: '2 days',
        url: require('../assets/images/sapa.jpg')
    },
    {
        id: 2,
        name: 'City Street Food',
        fee: 0,
        desc: 'This is a sample name of service that is very very long',
        type: 'City walking',
        duration: '2h',
        url: require('../assets/images/street_food.jpeg')
    },
    {
        id: 3,
        name: 'Ha Long bay',
        desc: 'This is a sample name of service that is very very long',
        fee: 210,
        type: 'Long trip',
        duration: '3 days',
        url: require('../assets/images/halongbay.jpg')
    },
    {
        id: 4,
        name: 'French quarter',
        fee: 0,
        type: 'City walking',
        duration: '2h',
        url: require('../assets/images/oldquarter.jpg')
    },
    {
        id: 5,
        name: 'Ho Chi Minh mausoleum',
        fee: 0,
        type: 'City walking',
        duration: '3h',
        url: require('../assets/images/hcm.jpeg')
    },
    {
        id: 6,
        name: 'Early morning',
        fee: 0,
        type: 'City walking',
        duration: '3h',
        url: require('../assets/images/turtle-tower.jpeg')
    },
    {
        id: 7,
        name: 'Bat Trang',
        fee: 99,
        type: 'Long trip',
        duration: '1 day',
        url: require('../assets/images/battrang.jpg')
    },
    {
        id: 8,
        name: 'Đường Lâm Old Village',
        fee: 78,
        type: 'Long trip',
        duration: '0.5 day',
        url: require('../assets/images/duonglam.jpg')
    },
    {
        id: 9,
        name: 'Hanoi Old Quarter',
        fee: 0,
        type: 'City walking',
        duration: '2h',
        url: require('../assets/images/turtle-tower.jpeg')
    },
    {
        id: 10,
        name: 'Half-Day Tour of Ancient Hanoi',
        fee: 15,
        type: 'City walking',
        duration: '0.5 day',
        url: require('../assets/images/halongbay.jpg')
    }
];