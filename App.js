/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [total, setTotal] = React.useState(1);
  const [value, onValueChange] = React.useState('');

  const sum = () => {
    setTotal(total + Number(value));
  }
  const sub = () => {
    setTotal(total - Number(value));
  }
  const div = () => {
    setTotal(total / Number(value));
  }
  const mul = () => {
    setTotal(total * Number(value));
  }

  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Smart Calculator</Text>
                <Text style={styles.sectionDescription}>
                  {total}
                </Text>
                <View>
                  <TextInput
                      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop:20 }}
                      onChangeText={text => onValueChange(text)}
                      value={value}
                      placeholder={'Enter a number'}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <Button
                      title="+"
                      onPress={() => sum()}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <Button
                      title="-"
                      onPress={() => sub()}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <Button
                      title="/"
                      onPress={() => div()}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <Button
                      title="*"
                      onPress={() => mul()}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
