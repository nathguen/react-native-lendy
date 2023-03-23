import { render } from '@testing-library/react-native';
import React from 'react';

import { Wrapper, Text } from '../';

describe('Wrapper', () => {
  it('renders Wrapper', () => {
    const { toJSON } = render(<Wrapper />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders Wrapper with children', () => {
    const { toJSON, getByText } = render(
      <Wrapper>
        <Text>Test</Text>
      </Wrapper>
    );

    expect(getByText('Test')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders Wrapper with baseHorizontal', () => {
    const { toJSON } = render(<Wrapper baseHorizontal />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders Wrapper with baseVertical', () => {
    const { toJSON } = render(<Wrapper baseVertical />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders Wrapper with baseHorizontal and baseVertical', () => {
    const { toJSON } = render(<Wrapper base />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders Wrapper with screen', () => {
    const { toJSON } = render(<Wrapper screen />);

    expect(toJSON()).toMatchSnapshot();
  });

  describe('flex options', () => {
    it('renders Wrapper with NO row', () => {
      const { toJSON } = render(
        <Wrapper>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('renders Wrapper with row', () => {
      const { toJSON } = render(
        <Wrapper row>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('renders Wrapper with row and reverse', () => {
      const { toJSON } = render(
        <Wrapper row reverse>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('renders Wrapper with reverse', () => {
      const { toJSON } = render(
        <Wrapper reverse>
          <Wrapper baseHorizontal>
            <Text>Item 1</Text>
          </Wrapper>

          <Wrapper baseHorizontal>
            <Text>Item 2</Text>
          </Wrapper>
        </Wrapper>
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
