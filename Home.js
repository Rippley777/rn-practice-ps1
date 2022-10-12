import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('./images/LogoBox.png')}
            />
            <Text style={styles.title}>Welcome to CoDesigns</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.description}>We specialize in everything design related from the web, to print to software designs</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    logo: {
        height: 100,
        width: 250
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    description: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    }
})

export default Home;