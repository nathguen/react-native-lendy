import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import ScreenTabs, { getScreenTabsTestId } from './';

describe('ScreenTabs', () => {
  describe('2 tabs', () => {
    it('renders the tabs', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2'];

      const { toJSON, queryByTestId, getByTestId } = render(
        <ScreenTabs tabs={tabs} />
      );

      expect(toJSON()).toMatchSnapshot();
      expect(getByTestId(getScreenTabsTestId('Tab 1', true))).toBeTruthy();
      expect(queryByTestId(getScreenTabsTestId('Tab 2', false))).toBeTruthy();
    });

    it('renders the tabs and defaults to the second one', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2'];

      const { toJSON: initialToJSON } = render(<ScreenTabs tabs={tabs} />);
      const { toJSON: secondToJSON } = render(
        <ScreenTabs tabs={tabs} defaultTab={'Tab 2'} />
      );

      expect(initialToJSON()).not.toEqual(secondToJSON());
    });

    it('renders the tabs and switches to second one when pressed', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2'];
      const mockedOnTabPress = jest.fn();

      const { getByText, getByTestId, queryByTestId } = render(
        <ScreenTabs tabs={tabs} onChangeTab={mockedOnTabPress} />
      );

      fireEvent.press(getByText('Tab 2'));
      expect(mockedOnTabPress).toHaveBeenCalledWith('Tab 2');
      expect(getByTestId(getScreenTabsTestId('Tab 2', true))).toBeTruthy();
      expect(queryByTestId(getScreenTabsTestId('Tab 1', false))).toBeTruthy();
    });
  });

  describe('3 tabs', () => {
    it('renders the tabs and defaults to the first one without "defaultTab" prop', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

      const { toJSON, queryByTestId } = render(<ScreenTabs tabs={tabs} />);

      expect(toJSON()).toMatchSnapshot();
      expect(queryByTestId(getScreenTabsTestId('Tab 1', true))).toBeTruthy();
    });

    it('renders the tabs and defaults to the third one', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

      const { toJSON, queryByTestId } = render(
        <ScreenTabs tabs={tabs} defaultTab="Tab 3" />
      );

      expect(toJSON()).toMatchSnapshot();
      expect(queryByTestId(getScreenTabsTestId('Tab 3', true))).toBeTruthy();
    });

    it('renders the tabs and switches to third one when pressed', () => {
      const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
      const mockedOnTabPress = jest.fn();

      const { getByText, getByTestId, queryByTestId } = render(
        <ScreenTabs tabs={tabs} onChangeTab={mockedOnTabPress} />
      );

      fireEvent.press(getByText('Tab 3'));
      expect(mockedOnTabPress).toHaveBeenCalledWith('Tab 3');
      expect(getByTestId(getScreenTabsTestId('Tab 3', true))).toBeTruthy();
      expect(queryByTestId(getScreenTabsTestId('Tab 1', false))).toBeTruthy();
      expect(queryByTestId(getScreenTabsTestId('Tab 2', false))).toBeTruthy();
    });
  });
});
