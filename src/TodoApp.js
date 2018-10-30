/**
 * Sample React Native TodoApp
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View} from 'react-native';
import  AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <VisibleTodos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});
export default TodoApp;