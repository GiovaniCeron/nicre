import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export default function InputValue() {

  const navigation = useNavigation();

  const[isRepetMoth, setRepetMoth] = useState(false);

  return (
    <View style={styles.containerInputValue}>
      <TextInput
        style={styles.contentInput}
        placeholder="Digite um Titulo"
        multiline={false}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Valor da Entrada"
        keyboardType={"numeric"}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Data da Entrada"
        keyboardType={"numeric"}
      />
      <View style={styles.containerCheckbox}>
        <CheckBox
          style={styles.checkbox}
          value={isRepetMoth}
          onValueChange={(newValue) => setRepetMoth(newValue)}
        />
        <Text>Repete todo mês</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.push('Home')}
      >
        <Text style={styles.textRegister}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}