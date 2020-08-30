import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  containerMovement: {
    marginTop: 10,
    height: 50,
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 1
  },
  contentMov:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    marginHorizontal: 20,
    marginVertical: 5
  },
  titleMov:{
    fontWeight: "bold",
    fontSize: 15,
  },
  contentDetail:{
    flexDirection: "row",
    justifyContent: "space-between",
    height:20,
    marginHorizontal:20
  },
  detail:{
    fontSize:10
  }
});