import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { useState } from 'react';

import { Button, Wrapper, Text, ButtonType, ButtonTypes } from '../';

const buttonText = 'Click me';
const renderedText = 'Button pressed';

const TestButton = ({ type }: { type: ButtonType }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <Wrapper>
      <Button
        type={type}
        title={buttonText}
        onPress={() => setButtonPressed(true)}
      />

      {!!buttonPressed && <Text>{renderedText}</Text>}
    </Wrapper>
  );
};

describe('Button', () => {
  Object.values(ButtonTypes).forEach((type) => {
    it(`renders and presses ${type} Button`, () => {
      const baseContainer = render(<TestButton type={type} />);

      expect(baseContainer).toMatchSnapshot();
      expect(screen.getByText(buttonText)).toBeTruthy();

      fireEvent.press(screen.getByText(buttonText));
      expect(screen.getByText(renderedText, { exact: true })).toBeTruthy();
    });
  });

  describe('disabled state', () => {
    Object.values(ButtonTypes).forEach((type) => {
      it(`renders ${type} Button and prevents presses`, () => {
        const baseContainer = render(<TestButton type={type} />);

        expect(baseContainer).toMatchSnapshot();
        expect(screen.getByText(buttonText)).toBeTruthy();

        fireEvent.press(screen.getByText(buttonText));
      });
    });
  });
});
