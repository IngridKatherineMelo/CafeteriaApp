import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; // 1. Importamos Yup
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 2. Definimos el esquema de validación con Yup (Esto reemplaza a validateLogin)
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[A-Z]/, 'Debe tener al menos una mayúscula')
    .matches(/\d/, 'Debe tener al menos un número')
    .required('Contraseña requerida'),
});

export default function Login({ navigation }) {
  const handleIngresar = async (values, { setSubmitting }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('MainTabs');
    } catch (error) {
      const message =
        error.code === 'auth/operation-not-allowed'
          ? 'Habilita Email/Password en Firebase Authentication.'
          : 'Credenciales incorrectas o error de conexión.';
      Alert.alert('Error', message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema} // 3. Usamos validationSchema en lugar de validate
      onSubmit={handleIngresar}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View style={styles.container}>
          <Text style={styles.titulo}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          {/* Mostramos el error si el campo fue tocado y existe un error de Yup */}
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button 
            title={isSubmitting ? "Cargando..." : "Ingresar"} 
            onPress={handleSubmit} 
            disabled={isSubmitting} 
          />
          
          <View style={{ marginTop: 10 }}>
            <Button 
              title="Registrar" 
              color="gray" 
              onPress={() => navigation.navigate('Registro')} 
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({ 
    container: { flex: 1, justifyContent: 'center', padding: 20 }, 
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }, 
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 5, borderRadius: 5, marginTop: 10 }, 
    error: { color: '#d00', marginBottom: 10, fontSize: 12 } 
});