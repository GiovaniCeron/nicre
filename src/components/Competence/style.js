import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  containerCompetece:{
    flex: 1
  },
  titleCompetence:{
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    height: 40
  },
  containerResume: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get('window').width,
    height: 80,
    marginVertical: 10
  },
  resumeType: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'rgb(0,0,0)',
    width: 110,
    justifyContent: "space-evenly",
  },
  titleResume:{
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  containerButtons:{
    position: "absolute",
    bottom: 0,
    flexDirection:"row",
    alignSelf: "center",
    marginVertical: 20
  },
  buttonDetail:{
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 20
  },
  descriptionButton:{
    textTransform: "uppercase",
    fontWeight: "bold"
  }

});