import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

import Movement from '../Movement/movement';

export default function Competence() {

  const navigation = useNavigation();

  return (
    <View style={styles.containerCompetece}>
      <Text style={styles.titleCompetence}>Agosto</Text>
      <View style={styles.containerResume}>
        <View style={styles.resumeType}>
          <Text style={styles.titleResume}>Entradas</Text>
          <Text>R$ 999999,99</Text>
        </View>
        <View style={styles.resumeType}>
          <Text style={styles.titleResume}>Saídas</Text>
          <Text>R$ 999999,99</Text>
        </View>
        <View style={styles.resumeType}>
          <Text style={styles.titleResume}>Balanço</Text>
          <Text>R$ 999999,99</Text>
        </View>
      </View>
      <View>
        <Movement />
        <Movement />
        <Movement />
        <Movement />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={styles.buttonDetail}
          onPress={() => navigation.push('Entrada de Valor')}
        >
          <Feather name="plus-circle" size={20}/>
          <Text style={styles.descriptionButton}>Entrada</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.buttonDetail}
          onPress={() => navigation.push('Saida de Valor')}
        >
          <Feather name="minus-circle" size={20}/>
          <Text style={styles.descriptionButton}>Saída</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
