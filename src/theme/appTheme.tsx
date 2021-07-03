import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
    globalMargin : {
        marginHorizontal: 20
    },
    title: {
        color:"#65D9E4",
        fontSize: 35,
        fontFamily: 'Arial',
        // color: "#2D2C3C"
    },
    backgroundPage: {
        backgroundColor: "#2D2C3C",
        height:'100%'
    },
    borderBottom : {
        borderColor: "#65D9E4",
        borderBottomWidth: 2,
        marginTop:25,
        marginBottom: 30,
        width: 40,
    },
    textColorLight: {
        color:"white"
    },
    welcomeContainer: {
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#2D2C3C',
        height: 100,
        marginBottom: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    }

})