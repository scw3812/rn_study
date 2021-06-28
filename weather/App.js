import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Forecast from './Forecast';
import fetchForecast from './open_weather_map';

export const App = () => {
  const [zip, setZip] = useState('');
  const [forecast, setForecast] = useState(null);

  const _handleTextChange = e => {
    const inputZip = e.nativeEvent.text;
    setZip(inputZip);
    fetchForecast(inputZip).then(result => {
      console.log(result);
      setForecast(result);
    });
  };

  const renderForecast = () => {
    return (
      <Forecast
        main={forecast.main}
        description={forecast.description}
        temp={forecast.temp}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>You input {zip}.</Text>
      {forecast ? renderForecast() : <Text>loading</Text>}
      <TextInput style={styles.input} onSubmitEditing={_handleTextChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center',
  },
});

export default App;
