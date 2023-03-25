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

  // margin
  mTop?: number;
  mRight?: number;
  mBottom?: number;
  mLeft?: number;
  mHorizontal?: number;
  mVertical?: number;

  // padding
  pTop?: number;
  pRight?: number;
  pBottom?: number;
  pLeft?: number;
  pHorizontal?: number;
  pVertical?: number;

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
  mTop,
  mRight,
  mBottom,
  mLeft,
  mHorizontal,
  mVertical,
  pTop,
  pRight,
  pBottom,
  pLeft,
  pHorizontal,
  pVertical,
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

        // margin styles
        ...(typeof mTop === 'number' && { marginTop: mTop }),
        ...(typeof mRight === 'number' && { marginRight: mRight }),
        ...(typeof mBottom === 'number' && { marginBottom: mBottom }),
        ...(typeof mLeft === 'number' && { marginLeft: mLeft }),
        ...(typeof mHorizontal === 'number' && {
          marginHorizontal: mHorizontal,
        }),
        ...(typeof mVertical === 'number' && {
          marginVertical: mVertical,
        }),

        // padding styles
        ...(typeof pTop === 'number' && { paddingTop: pTop }),
        ...(typeof pRight === 'number' && { paddingRight: pRight }),
        ...(typeof pBottom === 'number' && { paddingBottom: pBottom }),
        ...(typeof pLeft === 'number' && { paddingLeft: pLeft }),
        ...(typeof pHorizontal === 'number' && {
          paddingHorizontal: pHorizontal,
        }),
        ...(typeof pVertical === 'number' && {
          paddingVertical: pVertical,
        }),

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
