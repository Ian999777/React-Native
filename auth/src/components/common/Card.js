import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   return (
    <View style={styles.constainerStyle}>
     {props.children}
    </View>
  ); 
};


const styles = {
  constainerStyle: {
	  borderWidth: 1,
	  borderRadius: 2,
    borderColor: '#ADD8E6',
    borderBottomWidth: 0,
    shadowColor: '#FFF0F5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Card };
