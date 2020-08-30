import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export default function Spend() {

  const navigation = useNavigation();

  const [isParcelado, setParcelado] = useState(false);
  const [isRepetMoth, setRepetMoth] = useState(false);

  return (
    <View style={styles.containerSpend}>
      <TextInput
        style={styles.contentInput}
        placeholder="Digite um Titulo"
        multiline={false}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Valor da Saída"
        multiline={false}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Data da Saída"
        multiline={false}
      />
      <View style={styles.containerOptions}>
        <View style={styles.conteinerCheckbox}>
          <CheckBox
            value={isParcelado}
            onValueChange={(newValue) => setParcelado(newValue)}
          />
          <Text>Parcelado</Text>
        </View>
        <View style={styles.conteinerCheckbox}>
          <CheckBox
            value={isRepetMoth}
            onValueChange={(newValue) => setRepetMoth(newValue)}
          />
          <Text>Repete todo mês</Text>
        </View>
      </View>
      <View style={styles.conteinerParceled}>
        <TextInput
          style={styles.inputParceled}
          value={"12x"}
          multiline={false}
          editable={false}
        />
        <TextInput
          style={styles.inputParceled}
          value={"R$200,00"}
          multiline={false}
          editable={false}
        />
        <TextInput
          style={styles.inputParceled}
          placeholder={"Data Inicial"}
          multiline={false}
        />
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