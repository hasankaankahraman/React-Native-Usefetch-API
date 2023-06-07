import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        margin:10,
        flexDirection:'row',
        borderRadius:10,
        elevation:15
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain'
    },
    body_container:{
        margin:10,
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        padding:5,
        fontWeight:'bold',
        color:'black'
    },
    price:{
        fontWeight:'bold',
        textAlign:'right',
    },
})