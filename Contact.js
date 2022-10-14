import React, { useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
    StyleSheet,
    Alert
} from 'react-native';

const Contact = ({ navigation }) => {
    const [formName, setFormName] = useState(null);
    const [formEmail, setFormEmail] = useState(null);
    const [formPhoneNumber, setFormPhoneNumber] = useState(null);
    const [formMessage, setFormMessage] = useState(null);

    const submit = () => {
        if (!formName || !formEmail || !formMessage) {
            Alert.alert('Please enter all required fields')
        } else {
            Alert.alert(`Thank you ${formName}`);
            navigation.navigate('Home');
        }
    }

    return (
        <View style={StyleSheet.form}>
            <Text style={styles.labels}>
                Name *
            </Text>
            <TextInput
                style={styles.textinput}
                onChangeText={(name) => setFormName(name)}
                value={formName}
                placeholder='Enter'
                autoCapitalize='words'
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Email *
            </Text>
            <TextInput
                style={styles.textinput}
                onChangeText={(email) => setFormEmail(email)}
                placeholder='Enter'
                value={formEmail}
                autoCapitalize='words'
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Phone Number
            </Text>
            <TextInput
                style={styles.textinput}
                onChangeText={(phoneNumber) => setFormPhoneNumber(phoneNumber)}
                placeholder='Enter'
                value={formPhoneNumber}
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Message *
            </Text>
            <TextInput
                style={styles.multitextinput}
                onChangeText={(message) => setFormMessage(message)}
                placeholder='Enter'
                value={formMessage}
                selectTextOnFocus={true}
                multiline={true}
                numberOfLines={3}
            />
            <Button
                title='Contact Us'
                color='#708090'
                onPress={submit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 18
    },
    textinput:{
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '80%',
        paddingBottom: 15
    },
    multitextinput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '90%',
        height: 120,
        marginBottom: 50
    },
    labels: {
        fontFamily: 'Ubuntu-Regular'
    }
})
export default Contact;