import React, { useState } from 'react';
import { Button, Text, Wrapper } from 'react-native-lendy';
import { ScrollView, StyleSheet } from 'react-native';

type ButtonPressed = 'primary' | 'secondary' | 'tertiary' | '';

const ButtonsScreen = () => {
  const [buttonPressed, setButtonPressed] = useState<ButtonPressed>('');

  return (
    <>
      <Wrapper screen>
        <ScrollView>
          <Wrapper baseVertical>
            <Button
              type="primary"
              title="Primary Button"
              onPress={() => setButtonPressed('primary')}
              fullWidth
            />
          </Wrapper>

          <Wrapper baseVertical>
            <Button
              type="primary"
              title="Primary Button Disabled"
              onPress={() => setButtonPressed('primary')}
              disabled
              fullWidth
            />
          </Wrapper>

          <Wrapper baseVertical>
            <Button
              type="secondary"
              title="Secondary Button"
              onPress={() => setButtonPressed('secondary')}
              fullWidth
            />
          </Wrapper>

          <Wrapper baseVertical>
            <Button
              type="secondary"
              title="Secondary Button"
              onPress={() => setButtonPressed('secondary')}
              disabled
              fullWidth
            />
          </Wrapper>

          <Wrapper baseVertical>
            <Button
              type="tertiary"
              title="Tertiary Button"
              onPress={() => setButtonPressed('tertiary')}
              fullWidth
            />
          </Wrapper>

          <Wrapper baseVertical>
            <Button
              type="tertiary"
              title="Tertiary Button"
              onPress={() => setButtonPressed('tertiary')}
              disabled
              fullWidth
            />
          </Wrapper>
        </ScrollView>
      </Wrapper>

      <Wrapper style={styles.reactionTextWrapper}>
        {!!buttonPressed && <Text center>{buttonPressed} button pressed!</Text>}
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({
  reactionTextWrapper: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
});

export default ButtonsScreen;
