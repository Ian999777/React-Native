import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
   return (
    <View style={styles.spinnerstyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
   );
};

const styles = {
   spinnerstyle: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center' 	
   }
};

export { Spinner };

