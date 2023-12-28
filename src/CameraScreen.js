import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  Text,
  ActivityIndicator,
} from 'react-native';

import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
} from './helpers/tensor-helper';
import { cropPicture } from './helpers/image-helper';

import { Camera } from 'expo-camera';

const RESULT_MAPPING = [
  'algal leaf',
  'Anthracnose',
  'bird eye spot',
  'brown blight',
  'gray light',
  'healthy',
  'red leaf spot',
  'white spot',
];

const CameraScreen = () => {
  const cameraRef = useRef();
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedShape, setPresentedShape] = useState('');

  const handleImageCapture = async () => {
    setIsProcessing(true);
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 300);
    console.log('Cropped Data:', croppedData);
  
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);
  
    const prediction = await startPrediction(model, tensor);
    console.log('Prediction:', prediction);
  
    const highestPrediction = prediction.indexOf(Math.max.apply(null, prediction));
    console.log('Highest Prediction Index:', highestPrediction);
  
    setPresentedShape(RESULT_MAPPING[highestPrediction]);
  };
  
  return (
    <View style={styles.container}>
      <Modal visible={isProcessing} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.predictionText}>
              Disease Prediction is: <Text style={{ color: 'white',fontWeight:'bold' }}>{presentedShape}</Text>
            </Text>
            {presentedShape === '' && <ActivityIndicator size="large" />}
            <Pressable
              style={styles.dismissButton}
              onPress={() => {
                setPresentedShape('');
                setIsProcessing(false);
              }}>
              <Text style={{ color: 'green' }}>Dismiss</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        autoFocus={true}
        whiteBalance={Camera.Constants.WhiteBalance.auto}
      ></Camera>
      <Pressable onPress={() => handleImageCapture()} style={styles.captureButton}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  captureButton: {
    position: 'absolute',
    left: Dimensions.get('screen').width / 2 - 50,
    bottom: 40,
    width: 100,
    zIndex: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 24,
    backgroundColor: 'green',
  },
  dismissButton: {
    width: 150,
    height: 50,
    marginTop: 60,
    borderRadius: 24,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  predictionText: {
    color: 'white',
  },
});

export default CameraScreen;
