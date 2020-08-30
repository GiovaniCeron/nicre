import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  containerInputValue:{
    flex: 1,
    margin: 20,
    alignItems: "center"
  },
  contentInput:{
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    width: 220,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  containerCheckbox:{
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center"
  },
  checkbox:{
    marginRight: 10,
  },
  buttonRegister:{
    borderWidth: 1,
    borderColor: '#000',
    marginTop: Dimensions.get('window').height - 450,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  textRegister:{
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});