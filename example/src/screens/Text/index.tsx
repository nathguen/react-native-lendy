import React from 'react';
import { Text, Wrapper } from 'react-native-lendy';

const TextScreen = () => {
  return (
    <Wrapper screen>
      <Wrapper baseVertical>
        <Text center largeTitle>
          Title 1
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center title1>
          Title 1
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center title2>
          Title 2
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center title3>
          Title 3
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center headline>
          Headline
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center body>
          Body
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center callout>
          Callout
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center subhead>
          Footnote
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center caption1>
          Caption 1
        </Text>
      </Wrapper>
      <Wrapper baseVertical>
        <Text center caption2>
          Caption 2
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

export default TextScreen;
