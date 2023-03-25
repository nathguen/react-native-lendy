import { decode } from 'html-entities';
import React from 'react';

import { Colors } from '../../common';
import Text from '../Text';
import Wrapper from '../Wrapper';
import { styles } from './styles';

const ValidIcon = () => {
  return (
    <Wrapper style={styles.validIconWrapper}>
      <Wrapper style={styles.validIcon}>
        <Text color={Colors.White} style={styles.validIconText}>
          {decode('&check;')}
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

export default ValidIcon;
