import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { Wrapper, Text } from '../';

describe('Wrapper', () => {
  it('renders Wrapper', () => {
    const container = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });

  it('renders Wrapper with children', () => {
    const container = render(
      <Wrapper>
        <Text>Test</Text>
      </Wrapper>
    );

    expect(screen.getByText('Test')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders Wrapper with baseHorizontal', () => {
    const container = render(<Wrapper baseHorizontal />);

    expect(container).toMatchSnapshot();
  });

  it('renders Wrapper with baseVertical', () => {
    const container = render(<Wrapper baseVertical />);

    expect(container).toMatchSnapshot();
  });

  it('renders Wrapper with baseHorizontal and baseVertical', () => {
    const container = render(<Wrapper base />);

    expect(container).toMatchSnapshot();
  });

  it('renders Wrapper with screen', () => {
    const container = render(<Wrapper screen />);

    expect(container).toMatchSnapshot();
  });

  describe('flex options', () => {
    it('renders Wrapper with NO row', () => {
      const container = render(
        <Wrapper>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(container).toMatchSnapshot();
    });

    it('renders Wrapper with row', () => {
      const container = render(
        <Wrapper row>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(container).toMatchSnapshot();
    });

    it('renders Wrapper with row and reverse', () => {
      const container = render(
        <Wrapper row reverse>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(container).toMatchSnapshot();
    });

    it('renders Wrapper with reverse', () => {
      const container = render(
        <Wrapper reverse>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
