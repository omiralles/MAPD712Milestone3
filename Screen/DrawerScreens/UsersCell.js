import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

class UsersCell extends React.Component {
  
  render() {   
    return (
      <View style={styles.CellContainer}>
        <Image source = {require("../../Image/img-avatar-example4.png")} style = {styles.CellIcon}/>
        <View style={styles.CellDataContainer} margin={10}>
          <Text style={{fontWeight: "bold"}}>Name:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.name}</TextInput>
          <Text>E-Mail:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.email}</TextInput>
          <Text>Password:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.password}</TextInput>
          <Text>Profile:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.profile}</TextInput>
          <View style={styles.CellButtons}>
            <Button title='Save'/>
            <Button title='Delete'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CellAccessory: {
    width: 30,
    height: 30,
  },
  CellContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    minHeight: 100,
  },
  CellDataContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  CellButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginRight: 30,
  },
  CellIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  }, 
  ResidentCell: {
    margin: 5,
    backgroundColor: '#bbb',
    borderWidth:2,
    borderRadius: 10,
    minHeight: 100,
  }
});

export default UsersCell;