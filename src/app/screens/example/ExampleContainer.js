import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const ExampleContainer = ({componentId}) => {
  const [canJoin, setCanJoin] = useState(false);

  useEffect(() => {
    console.log('canJoin effect with', canJoin);
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'JOIN',
            icon: require('../check.png'),
            enabled: canJoin,
          },
        ],
      },
    });
  }, [componentId, canJoin]);

  return (
    <View>
      <Text>example</Text>
      <Button onPress={() => setCanJoin(true)} title="set canJoin to True" />
    </View>
  );
};

ExampleContainer.options = () => ({
  topBar: {
    rightButtons: [
      {
        id: 'JOIN',
        icon: require('../check.png'),
        enabled: false,
      },
    ],
  },
});

export default ExampleContainer;
