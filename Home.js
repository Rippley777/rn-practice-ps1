import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('./images/LogoBox.png')}
            />
            <Text style={styles.title}>Welcome to CoDesigns</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image
                style={styles.hero}
                source={require('./images/boxing.jpg')}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.description}>We specialize in everything design related from the web, to print to software designs</Text>
            </View>
            <View style={styles.menu}>
                <Menu />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
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
    },
    hero: {
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
})

export default Home;