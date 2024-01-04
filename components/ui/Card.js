import React from 'react'
import { Dimensions, StyleSheet,View } from 'react-native'

const Card = ({children}) => {
  
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

export default Card
const deviceWidth=Dimensions.get('window').width;
const styles=StyleSheet.create({
    inputContainer: {
        marginTop: deviceWidth<380 ? 10 : 20,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#59032f",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})