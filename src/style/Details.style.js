import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{flex:1},
    body_container:{
        padding:30,
        borderWidth:0,
        margin:10,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:100,
        height:100,
    },
    title:{
        fontWeight:'bold',
        color:'#000',
        justifyContent:'center',
        textAlign:'center',
        top:10
    },
    desc:{
        fontStyle:'italic',
        paddingTop:20
    },
    price:{
        fontWeight:'bold',
        fontSize:22,
        color:'#f00',
    }
})