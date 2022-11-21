import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

class AdminResidentCell extends React.Component {
  
  render() {
    
    return (
      <View style={styles.CellContainer}>
        <Image source = {require("../../Image/img-avatar-example4.png")} style = {styles.CellIcon}/>
        <View style={styles.CellDataContainer} margin={10}>
          <Text style={{fontWeight: "bold"}}>Name:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.completename}</TextInput>
          <Text>SIN:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}> {this.props.sin}</TextInput>
          <Text>Address:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.address}</TextInput>
          <Text>City:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.city}</TextInput>
          <Text>Phone:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.phone}</TextInput>
          <Text>Age:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.age}</TextInput>
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
  CellIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  CellButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginRight: 30,
  },
  ResidentCell: {
    margin: 5,
    backgroundColor: '#bbb',
    borderWidth:2,
    borderRadius: 10,
    minHeight: 100,
  }
});

export default AdminResidentCell;