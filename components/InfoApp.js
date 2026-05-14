import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function InfoApp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cafetería App</Text>
      <Text style={styles.parrafo}>Bienvenido a la app de la cafetería. Aquí puedes crear pedidos, ver el menú y consultar información de contacto.</Text>
      <Text style={styles.subtitulo}>Contacto</Text>
      <Text style={styles.parrafo}>Teléfono: +52 55 1234 5678</Text>
      <Text style={styles.parrafo}>Dirección: Calle Falsa 123, Ciudad</Text>
      <Text style={styles.subtitulo}>Notas</Text>
      <Text style={styles.parrafo}>Los pedidos se guardan en Firebase y se actualizan en tiempo real.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#fff' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  parrafo: { fontSize: 16, lineHeight: 24, color: '#333' },
});
