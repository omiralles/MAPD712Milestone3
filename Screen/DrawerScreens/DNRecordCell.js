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

    /*fetch('http://localhost:3000/residentRecords/?user_id=' + this.props.userid + '&completename=' + this.props.completeName + 
        '&sin=' + this.props.sin + '&day=' + this.props.recordDate + '&blood_pressure=' + this.props.bloodPreaseure + 
        '&respiration_rate=' + this.props.respiratoryRate + '&blood_oxygen=' + this.props.bloodOxygen + 
        '&heart_beat=' + this.props.heartBeat + '&comment=' + this.props.comment ,
        {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson?.length != 0) {
                alert('Data changed');
                console.log('Data changed');
            } else {
            setErrortext("Error on changing data");
            console.log('Error on changing data');
            }
        })
        .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        })*/

    /*fetch('http://localhost:3000/residentRecords/' + this.props.id ,
        {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson?.length != 0) {
            alert('Data deleted');
            console.log('Data changed');
        } else {
            setErrortext("Error on changing data");
            console.log('Error on changing data');
        }
        })
        .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
        })*/

class ResidentCell extends React.Component {

  render() {   
    return (
      <View style={styles.CellContainer}>
        <Image source = {require("../../Image/heartrate.png")} style = {styles.CellIcon}/>
        <View style={styles.CellDataContainer} margin={10}>
          <Text style={{fontWeight: "bold"}}>Day: {this.props.recordDate}</Text>
          <Text>Complete name: {this.props.completename}</Text>
          <Text>SIN: {this.props.sin}</Text>
          <Text style={{fontWeight: "bold"}}>Blood pressure:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.bloodPressure}</TextInput>
          <Text style={{fontWeight: "bold"}}>Respiration rate:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.respiratoryRate}</TextInput>
          <Text style={{fontWeight: "bold"}}>Blood oxygen:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.bloodOxygen}</TextInput>
          <Text style={{fontWeight: "bold"}}>Heart beat:</Text>
          <TextInput style={{backgroundColor: '#DCDCDC'}}>{this.props.heartBeat}</TextInput>
          <Text style={{fontWeight: "bold"}}>Comment:</Text>
          <TextInput style={styles.Input} multiline={true}>{this.props.comment}</TextInput>
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
    minHeight: 150,
  },
  CellButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginRight: 30,
  },
  Input: {
    height: 60,
    backgroundColor: '#DCDCDC',
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