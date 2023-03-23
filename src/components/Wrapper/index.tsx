import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';

interface WrapperProps extends ViewProps {
  row?: boolean;
  reverse?: boolean;

  padding?: number; // allows override
  base?: boolean;
  baseHorizontal?: boolean;
  baseVertical?: boolean;

  screen?: boolean;

  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  /**
   * Centers content vertically and horizontally in the wrapper
   */
  center?: boolean;
}

const Wrapper = ({
  row,
  reverse,
  padding,
  top,
  bottom,
  left,
  right,
  base,
  baseHorizontal,
  baseVertical,
  screen,
  center,
  ...props
}: WrapperProps) => {
  return (
    <View
      style={{
        ...(base && styles.baseWrapper),
        ...(baseHorizontal && styles.baseHorizontal),
        ...(baseVertical && styles.baseVertical),
        ...(screen && styles.screenWrapper),
        ...(typeof padding === 'number' && { padding }), // allows override

        // flex styles
        ...(row && styles.wrapperRow),
        ...(row && reverse && styles.wrapperReverseRow),
        ...(!row && !reverse && styles.wrapperColumn),
        ...(!row && reverse && styles.wrapperReverseColumn),

        // positioning styles
        ...(typeof top === 'number' && { top }),
        ...(typeof bottom === 'number' && { bottom }),
        ...(typeof left === 'number' && { left }),
        ...(typeof right === 'number' && { right }),
        ...(center && styles.centerContent),

        // @ts-ignore
        ...(!!props.style && props.style), // allows for style override
      }}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperRow: {
    flexDirection: 'row',
  },
  wrapperReverseRow: {
    flexDirection: 'row-reverse',
  },
  wrapperColumn: {
    flexDirection: 'column',
  },
  wrapperReverseColumn: {
    flexDirection: 'column-reverse',
  },
  baseWrapper: {
    padding: 8,
  },
  baseHorizontal: {
    paddingHorizontal: 8,
  },
  baseVertical: {
    paddingVertical: 8,
  },
  screenWrapper: {
    padding: 16,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Wrapper;
