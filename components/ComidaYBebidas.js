import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ComidaYBebidas() {

  const menu = [
    {
      cat: '☕ Bebidas',
      items: [
        'Café Americano',
        'Cappuccino',
        'Té Chai',
        'Jugo Natural',
        'Chocolate Caliente'
      ]
    },
    {
      cat: '🥪 Comida',
      items: [
        'Croissant',
        'Sándwich de Jamón',
        'Brownie',
        'Muffin',
        'Panini de Pollo'
      ]
    },
    {
      cat: '🍰 Postres',
      items: [
        'Cheesecake',
        'Galletas',
        'Torta de Chocolate',
        'Cupcake'
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        ☕ Menú Cafetería
      </Text>

      {menu.map((seccion, index) => (
        <View key={index} style={styles.card}>

          <Text style={styles.categoria}>
            {seccion.cat}
          </Text>

          {seccion.items.map((item, i) => (
            <View key={i} style={styles.itemContainer}>
              <Text style={styles.item}>
                • {item}
              </Text>
            </View>
          ))}

        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#6200ee',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },

  categoria: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
  },

  itemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  item: {
    fontSize: 17,
    color: '#333',
  },

});