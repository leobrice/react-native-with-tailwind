
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const app = ()=> {
  const[count,setCount]=useState(0);
  return (
    <View className="bg-blue-200">
      <SafeAreaView  className="bg-red-200">
        <View>
          <Text>You have pressed {count} times</Text>
          <StatusBar />
          <Button
            title="Add +"
            color="#841584"
            onPress={() => {
              setCount(count + 1);
            }}
          ></Button>
          <Button
            title="Clear"
            onPress={() => {
              setCount(0);
            }}
          ></Button>
        </View>
      </SafeAreaView>
    </View>
  );
}


export default app;

