import { View,StyleSheet,Text } from "react-native"


const GuessLogItem = ({roundNumber,guess}) => {
  return (
    <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent 's Guess:{guess} </Text>
    </View>
  )
}

export default GuessLogItem;


const styles=StyleSheet.create({
    listItem:{
    width:'100%',
        borderWidth:2,
        borderRadius:40,
        padding:12, 
        backgroundColor:"#ddb52f",
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    }
})