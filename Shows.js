import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList, 
    Image,
    TouchableOpacity
} from 'react-native';
import data from './ShowsDB';
import { useNavigation } from '@react-navigation/native';

const Shows = () => {
    const navigation = useNavigation();
    const showItem = ({ item: show }) => {
        return (
            <View style={styles.shows}>
                <View>
                    <Image
                        style={styles.img}
                        source={show.image}
                    />
                </View>
                <View>
                    <Text style={styles.showtitle}>
                        {show.event}
                    </Text>
                    <Text
                        style={styles.shortdescription}
                    >
                        {show.shortDescription}
                    </Text>
                    <Text
                        style={styles.description}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {show.description}
                    </Text>
                    <Text style={styles.shortdescription}>
                        Price: {show.price}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Purchase', {
                                ticketId: show.eventId
                            })
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.ticketbutton}>
                            GET TICKETS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={showItem}
                keyExtractor={(item) =>  item.eventId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    shows: {
        flexDirection: 'column'
    },
    img: {
        height: 180,
        width: '100%'
    },
    showtitle: {
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    shortdescription: {
        fontFamily: 'Ubuntu-Light',
        // fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5
    },
    description: {
        fontFamily: 'Ubuntu-Light',
        // fontWeight: '600',
        padding: 15
    },
    ticketbutton: {
        fontFamily: 'Ubuntu-Bold',
        fontWeight: '800',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15
    }
});

export default Shows;