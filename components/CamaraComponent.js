import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CamaraComponent() {

  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [facing, setFacing] = useState('back');

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Necesitamos permiso para usar la cámara</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Dar permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync();
      setPhoto(data.uri);
    }
  };

  const flipCamera = () => {
    setFacing(current =>
      current === 'back' ? 'front' : 'back'
    );
  };

  // volver a tomar foto
  const retakePhoto = () => {
    setPhoto(null);
  };

  return (
    <View style={{ flex: 1 }}>

      {!photo ? (

        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          ref={(ref) => setCameraRef(ref)}
        />

      ) : (

        <View style={{ flex: 1 }}>

          <Image
            source={{ uri: photo }}
            style={{ flex: 1 }}
          />

          {/* BOTÓN X */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={retakePhoto}
          >
            <Ionicons
              name="close"
              size={35}
              color="white"
            />
          </TouchableOpacity>

        </View>

      )}

      {!photo && (
        <View style={styles.controls}>

          <TouchableOpacity
            style={styles.button}
            onPress={flipCamera}
          >
            <Text style={styles.buttonText}>
              Voltear
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={takePicture}
          >
            <Text style={styles.buttonText}>
              Foto
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controls: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    padding: 5,
  },

});