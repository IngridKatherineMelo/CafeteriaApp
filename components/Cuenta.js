import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Cuenta({ pedido, onVolver }) {
  const precioNum = parseFloat(pedido.precio) || 0;
  const cantidadNum = parseInt(pedido.cantidad) || 0;
  const total = cantidadNum * precioNum;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumen del Pedido</Text>
      <View style={styles.ticket}>
        <Text>Cliente: {pedido.nombre}</Text>
        <Text>Producto: {pedido.producto}</Text>
        <Text>Cantidad: {pedido.cantidad}</Text>
        <Text>Precio: ${pedido.precio}</Text>
        <Text>Observaciones: {pedido.observaciones}</Text>
        <Text style={styles.total}>Total a pagar: ${total}</Text>
        <Text style={styles.bold}>Estado: {pedido.paraLlevar ? "Para llevar" : "Consumir en el lugar"}</Text>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.info}>Atendido por: Sistema Cafetería</Text>
        <Text style={styles.info}>Dirección: Calle Falsa 123</Text>
      </View>
      
      <Button title="Volver al inicio" onPress={onVolver} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40, flex: 1, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  ticket: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10, marginBottom: 20 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 10, color: 'green' },
  bold: { fontWeight: 'bold', marginTop: 10 },
  infoBox: { marginBottom: 20 },
  info: { fontStyle: 'italic', color: '#555' }
});
