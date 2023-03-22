import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Colors, multiply, ScreenTabs, Text } from 'react-native-lendy';

const screenTabs: string[] = ['Tab One', 'Tab Two', 'Tab Three'];

const Home = () => {
  const [result, setResult] = useState<number | undefined>();
  const [activeTab, setActiveTab] = useState(screenTabs[0]);

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Press me" size="medium" onPress={() => {}} />
      <Text color={Colors.Yellow}>Result: {result}</Text>
      <ScreenTabs
        defaultTab={activeTab}
        onChangeTab={setActiveTab}
        tabs={screenTabs}
      />
      <Text>Active Tab: {activeTab}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default Home;
