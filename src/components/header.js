//import libraries for making a component
import React from 'react';
import { Text } from 'react-native';


//Make a component
export default class Header extends React.Component{
  render() {
    return(
      <Text>
        Albums!
      </Text>
    );
  }
}


//Make the component available to other parts of the app
