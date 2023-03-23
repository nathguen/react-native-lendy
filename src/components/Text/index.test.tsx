import { render } from '@testing-library/react-native';
import React from 'react';

import { Text, Wrapper } from '../';

describe('Text', () => {
  const text = 'Some text';

  it('renders Text', () => {
    const { toJSON, getByText } = render(
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText(text)).toBeTruthy();
  });

  it('renders Text with bold', () => {
    const { toJSON, getByText } = render(
      <Wrapper>
        <Text bold>{text}</Text>
      </Wrapper>
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText(text)).toBeTruthy();
  });

  it('Text and Text with bold should not match', () => {
    const { toJSON } = render(
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    );

    const { toJSON: boldToJSON } = render(
      <Wrapper>
        <Text bold>{text}</Text>
      </Wrapper>
    );

    expect(toJSON()).not.toEqual(boldToJSON());
  });
});
