import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';

interface WrapperProps extends ViewProps {
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
  centerHorizontal?: boolean;
  centerVertical?: boolean;
}

const Wrapper = ({
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
