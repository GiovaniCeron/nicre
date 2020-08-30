import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  containerSpend:{
    flex: 1,
    marginTop: 20,
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
  containerOptions:{
    flexDirection: "row",
  },
  conteinerCheckbox:{
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center"
  },
  conteinerParceled:{
    flexDirection: "row",
    width: 250,
    justifyContent: "space-between",
    marginTop: 20
  },
  inputParceled:{
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  buttonRegister:{
    borderWidth: 1,
    borderColor: '#000',
    marginTop: Dimensions.get('window').height - 550,
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