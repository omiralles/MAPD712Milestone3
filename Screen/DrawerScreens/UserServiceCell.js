import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';

class ResidentCell extends React.Component {
  
  render() {
    
    return (
      <View style={styles.CellContainer}>
        <Image source = {require("../../Image/Notepad.png")} style = {styles.CellIcon}/>
        <View style={styles.CellDataContainer}>
          <Text style={{fontWeight: "bold"}}>Day: {this.props.servDate}</Text>
          <Text>Especiality: {this.props.servSpeciality}</Text>
          <Text>Center: {this.props.servCenter}</Text>
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
  ResidentCell: {
    margin: 5,
    backgroundColor: '#bbb',
    borderWidth:2,
    borderRadius: 10,
    minHeight: 100,
  }
});

export default ResidentCell;