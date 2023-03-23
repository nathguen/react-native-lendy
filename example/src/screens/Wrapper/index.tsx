import React from 'react';
import { Text, Wrapper } from 'react-native-lendy';

const WrapperScreen = () => {
  return (
    <Wrapper screen>
      <Wrapper row center>
        <Wrapper baseHorizontal>
          <Text center>Item 1</Text>
        </Wrapper>
        <Wrapper baseHorizontal>
          <Text center>Item 2</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default WrapperScreen;
