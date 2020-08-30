import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import style from './style';

export default function Movement() {
  return (
    <View style={styles.containerMovement}>
      <View style={styles.contentMov}>
        <Text style={styles.titleMov}>Salário</Text>
        <Text style={styles.titleMov}>R$ 5000,00</Text>
      </View>
      <View style={styles.contentDetail}>
        <Text style={styles.detail}>05/08/2020</Text>
        <Text style={styles.detail}>Detalhes</Text>
      </View>
    </View>
  );
}