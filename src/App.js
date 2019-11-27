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

import CalcButton from './components/CalcButton'
import CalcInput from './components/CalcInput'
import CalcTotal from './components/CalcTotal'

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
  const reset = () => {
    setTotal(0);
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
                  <CalcTotal total={total} />
                <View>
                  <CalcInput
                      value={value}
                      changeValue={onValueChange}
                    />
                </View>
                <View style={{marginTop:40}}>
                  <CalcButton
                      title = {'+'}
                      callback={sum}
                      bgColor={'green'}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <CalcButton
                      title = {'-'}
                      callback={sub}
                      bgColor={'navy'}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <CalcButton
                      title = {'/'}
                      callback={div}
                      bgColor={'black'}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <CalcButton
                      title = {'*'}
                      callback={mul}
                      bgColor={'red'}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <CalcButton
                      title = {'C'}
                      callback={reset}
                      bgColor={'#990099'}
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
