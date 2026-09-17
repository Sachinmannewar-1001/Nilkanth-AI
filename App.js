import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [listening, setListening] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nilkanth-AI Voice Assistant</Text>
      <TouchableOpacity 
        style={[styles.btn, listening && styles.btnActive]} 
        onPress={() => setListening(!listening)}
      >
        <Text style={styles.btnText}>{listening ? 'Listening...' : 'Start Voice'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  btn: { backgroundColor: '#2563eb', padding: 20, borderRadius: 50 },
  btnActive: { backgroundColor: '#ef4444' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: '600' }
});
