import { Text,StyleSheet } from "react-native";

function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;


const styles=StyleSheet.create({
    title:{
        padding:12,
        fontSize:24,
        borderColor:"white",
        borderWidth:2,
        color:"white",
        textAlign:'center',
    maxWidth:'80%',
    width:300,
        fontWeight:'bold',
        borderRadius:8

    }
})