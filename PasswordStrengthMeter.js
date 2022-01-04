/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {Text, StyleSheet, View,TextInput} from 'react-native';
import PropTypes from 'prop-types';
const PasswordStrengthMeter = (props) => {
  const [passwordStrength, setpasswordStrength] = useState(0);
  const [passwordStrengthName, setpasswordStrengthName] = useState('Too short');
  const [color, setcolor] = useState('white');

  PasswordStrengthMeter.defaultProps = {
  security: 'default',
  minChar: 8,
  };

  useEffect(() => {
    let securityLevel = 0;
    let strengthLevel = 0;
    let passwordLength = props.value.length;
    var specialChars = /[<>@!#$%^&*()_+[]/;
    //calculate the strengthlevel of the password
    if (/\d/.test(props.value)){
      strengthLevel++;
    }
    if (/[a-z]/.test(props.value) && /[A-Z]/.test(props.value))
    {
      strengthLevel++;
    }
    if (specialChars.test(props.value))
    {
      strengthLevel++;
    }
    if (passwordLength > props.minChar){
      strengthLevel++;
    }
    if (passwordLength > 12){
      strengthLevel++;
    }
    setpasswordStrength(strengthLevel);
  //Look at the security the user wants
    if (props.security === 'strong'){
      securityLevel = 1;
    }
    if (props.security === 'max'){
      securityLevel = 2;
    }

    //is the password long enough and how secure is it
    if (passwordLength < props.minChar){
      setcolor('grey');
      setpasswordStrengthName('Too short');
    }
    else {
      if (strengthLevel < 1 + securityLevel){
        setcolor('red');
        setpasswordStrengthName('Weak');
      }
      else if (strengthLevel < 2 + securityLevel){
        setcolor('yellow');
        setpasswordStrengthName('Fair');
      }
      else if (strengthLevel < 3 + securityLevel){
        setcolor('blue');
        setpasswordStrengthName('Good');
      }
      else if (strengthLevel < 4 + securityLevel){
        setcolor('green');
        setpasswordStrengthName('Strong');
      }
    }
  }, [passwordStrengthName, passwordStrength, props.value,props.minChar,props.security]);





  return (
    <View style={styles.sectionContainer}>
      <Text style={{ alignSelf: 'center' }}>
        Password:
      </Text>
      <TextInput
       {...props}
      style={styles.passwordInput}/>
      <View style={styles.strengthMeter}><Text>{passwordStrengthName}</Text><View style={[styles.meter,{backgroundColor: color}]}/></View>
    </View>
  );
};
PasswordStrengthMeter.propTypes = {
  value: PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
  },
  passwordInput: {
    marginLeft: 5,
    width: '35%',
  },
  strengthMeter: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'column',
  },
  meter: {
    height: '10%',
    width: '100%',
    backgroundColor: '#f22fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default PasswordStrengthMeter;
