import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Button, ButtonTypes } from '../';

const buttonText = 'Click me';

describe('Button', () => {
  it('renders and presses primary button', () => {
    const mockedPress = jest.fn();

    const { toJSON, getByText } = render(
      <Button title={buttonText} type="primary" onPress={mockedPress} />
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText(buttonText)).toBeTruthy();

    fireEvent.press(getByText(buttonText));
    expect(mockedPress).toHaveBeenCalled();
  });

  Object.values(ButtonTypes).forEach((type) => {
    it(`renders and presses ${type} Button`, () => {
      const mockedPress = jest.fn();

      const { toJSON, getByText } = render(
        <Button title={buttonText} type={type} onPress={mockedPress} />
      );

      expect(toJSON()).toMatchSnapshot();
      expect(getByText(buttonText)).toBeTruthy();

      fireEvent.press(getByText(buttonText));
      expect(mockedPress).toHaveBeenCalled();
    });
  });

  describe('disabled state', () => {
    Object.values(ButtonTypes).forEach((type) => {
      it(`renders ${type} Button and prevents presses`, () => {
        const mockedPress = jest.fn();

        const { toJSON, getByText } = render(
          <Button
            disabled
            title={buttonText}
            type={type}
            onPress={mockedPress}
          />
        );

        expect(toJSON()).toMatchSnapshot();
        expect(getByText(buttonText)).toBeTruthy();

        fireEvent.press(getByText(buttonText));
        expect(mockedPress).not.toHaveBeenCalled();
      });
    });
  });
});
