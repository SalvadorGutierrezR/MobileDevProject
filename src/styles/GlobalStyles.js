import { StyleSheet } from "react-native";

export const colors= {
    primary: '#003049',
    secondary: '#D62828',
    tertiary: '#F77F00',
}

export const globalStyles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20

    },
    generalText: {
        fontSize: 16,
        color: 'black',
    },
    logoText: {
        fontSize: 50,
        color: 'black',
        textTransform: 'uppercase',
        fontFamily: 'Oswald-Regular',
    },
    titleText: {
        fontSize: 30,
        color: 'black',
    },
    subtitleText:{
        fontSize: 20,
        color: 'black',
    },
    textInputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'black',
    },
    inputLabel: {
        fontSize: 18,
        color: '#000',
        marginBottom: 15,
    },
    inputContainer: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    },
})