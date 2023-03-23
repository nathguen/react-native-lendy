import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { Text, Wrapper } from '../';

describe('Text', () => {
  const text = 'Some text';

  it('renders Text', () => {
    const baseContainer = render(
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    );

    expect(baseContainer).toMatchSnapshot();
    expect(screen.getByText(text)).toBeTruthy();
  });

  it('renders Text with bold', () => {
    const boldContainer = render(
      <Wrapper>
        <Text bold>{text}</Text>
      </Wrapper>
    );

    expect(boldContainer).toMatchSnapshot();
    expect(screen.getByText(text)).toBeTruthy();
  });

  it('Text and Text with bold should not match', () => {
    const baseContainer = render(
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    );

    const boldContainer = render(
      <Wrapper>
        <Text bold>{text}</Text>
      </Wrapper>
    );

    expect(baseContainer.toJSON()).not.toEqual(boldContainer.toJSON());
  });
});
