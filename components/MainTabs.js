import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PedidoCafeteria from './PedidoCafeteria';
import ComidaYBebidas from './ComidaYBebidas';
import InfoApp from './InfoApp';
import CamaraComponent from './CamaraComponent';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen 
        name="Nuevo Pedido" 
        component={PedidoCafeteria} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ) 
        }}
      />

      <Tab.Screen 
        name="Menú" 
        component={ComidaYBebidas} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ) 
        }}
      />

      <Tab.Screen 
        name="Cámara" 
        component={CamaraComponent} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" color={color} size={size} />
          ) 
        }}
      />

      <Tab.Screen 
        name="Info" 
        component={InfoApp} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ) 
        }}
      />

    </Tab.Navigator>
  );
}