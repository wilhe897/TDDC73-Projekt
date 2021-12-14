/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {Text, StyleSheet, View,TextInput} from 'react-native';
const PasswordStrengthMeter = (props) => {
  const [passwordStrength, setpasswordStrength] = useState(0);
  const [passwordStrengthName, setpasswordStrengthName] = useState('Too short');
  const [color, setcolor] = useState('white');

  PasswordStrengthMeter.defaultProps = {
  minChar: 8,
  security: 'default',
  };

  useEffect(() => {
    let securityLevel = 0;
    if (props.security === 'strong'){
      securityLevel = 1;
    }
    if (props.security === 'max'){
      securityLevel = 2;
    }
    if (props.value.length < props.minChar){
      setcolor('grey');
      setpasswordStrengthName('Too short');
    }
    else {
      if (passwordStrength < 1 + securityLevel){
        setcolor('red');
        setpasswordStrengthName('Weak');
      }
      else if (passwordStrength < 2 + securityLevel){
        setcolor('yellow');
        setpasswordStrengthName('Fair');
      }
      else if (passwordStrength < 3 + securityLevel){
        setcolor('blue');
        setpasswordStrengthName('Good');
      }
      else if (passwordStrength < 4 + securityLevel){
        setcolor('green');
        setpasswordStrengthName('Strong');
      }
    }
  }, [passwordStrengthName, passwordStrength, props.value,props.minChar,props.security]);

  useEffect(() => {
    let strengthLevel = 0;
    let passwordLength = props.value.length;
    if (/\d/.test(props.value)){
      strengthLevel++;
    }
    if (/[a-z]/.test(props.value) && /[A-Z]/.test(props.value))
    {
      strengthLevel++;
    }
    var specialChars = /[<>@!#$%^&*()_+[]/;
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
  }, [props.value,props.minChar]);



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
