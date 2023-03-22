import { DrawerToggleButton } from '@react-navigation/drawer';
import React from 'react';
import { Colors, Text, Wrapper } from 'react-native-lendy';

const Home = () => {
  return (
    <Wrapper screen>
      <Text center largeTitle>
        Welcome!
      </Text>

      <Wrapper baseVertical>
        <Text center>
          This is the Lendy Component Library, where all of the components used
          in the Lendy app are available for use for others.
        </Text>
      </Wrapper>

      <Wrapper baseVertical>
        <Text center>
          You can look around by pressing the <Text bold>menu button</Text>:.
        </Text>
      </Wrapper>

      <Wrapper baseVertical center>
        <DrawerToggleButton tintColor={Colors.Dark} />
      </Wrapper>
    </Wrapper>
  );
};

export default Home;
