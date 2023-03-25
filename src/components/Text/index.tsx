import { camelCase, startCase } from 'lodash';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

import { FontStyles } from '../../common';
import CommonStyles from '../../common/styles';

type TextType =
  | 'LargeTitle'
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Headline'
  | 'Body'
  | 'Callout'
  | 'Subhead'
  | 'Footnote'
  | 'Caption1'
  | 'Caption2';

export enum TextTypes {
  LargeTitle = 'LargeTitle',
  Title1 = 'Title1',
  Title2 = 'Title2',
  Title3 = 'Title3',
  Headline = 'Headline',
  Body = 'Body',
  Callout = 'Callout',
  Subhead = 'Subhead',
  Footnote = 'Footnote',
  Caption1 = 'Caption1',
  Caption2 = 'Caption2',
}

interface TextProps extends RNTextProps {
  /**
   * text style type
   */
  textType?: TextType | TextTypes;
  largeTitle?: boolean;
  title1?: boolean;
  title2?: boolean;
  title3?: boolean;
  headline?: boolean;
  body?: boolean;
  callout?: boolean;
  subhead?: boolean;
  footnote?: boolean;
  caption1?: boolean;
  caption2?: boolean;

  color?: string;

  left?: boolean;
  center?: boolean;
  right?: boolean;

  bold?: boolean;

  /**
   * spacing style
   */
  mTop?: number;
  mRight?: number;
  mBottom?: number;
  mLeft?: number;
  mHorizontal?: number;
  mVertical?: number;
}

const Text = ({
  textType,
  color,
  left,
  center,
  right,
  bold,
  mTop,
  mRight,
  mBottom,
  mLeft,
  mHorizontal,
  mVertical,
  ...props
}: TextProps) => {
  const appliedStyles: StyleSheet.NamedStyles<any> = useMemo(() => {
    if (textType && CommonStyles[textType]) {
      return CommonStyles[textType];
    }

    const commonStyleKey = Object.keys(CommonStyles).find(
      (styleKey: string) => {
        const pascalCasedKey = camelCase(styleKey);

        if (Object.keys(props).includes(pascalCasedKey)) {
          return startCase(camelCase(styleKey)).replace(/\s/g, '');
        }

        return '';
      }
    );

    if (commonStyleKey) {
      // @ts-ignore
      return CommonStyles[commonStyleKey];
    }

    // defaults to Body style if no parameter passed in
    return CommonStyles.Body;
  }, [props, textType]);

  return (
    <RNText
      {...props}
      style={{
        // @ts-ignore
        ...(!!props.style && props.style),
        ...appliedStyles,
        ...(color && { color }), // allows custom color
        ...(left && styles.textLeft), // text aligns => left
        ...(center && styles.textCenter), // text aligns => center
        ...(right && styles.textRight), // text aligns => right
        ...(bold && { fontWeight: FontStyles.bold }), // bold

        // spacing
        ...(typeof mTop === 'number' && { marginTop: mTop }),
        ...(typeof mRight === 'number' && { marginRight: mRight }),
        ...(typeof mBottom === 'number' && { marginBottom: mBottom }),
        ...(typeof mLeft === 'number' && { marginLeft: mLeft }),
        ...(typeof mHorizontal === 'number' && {
          marginHorizontal: mHorizontal,
        }),
        ...(typeof mVertical === 'number' && { marginVertical: mVertical }),
      }}
    />
  );
};

const styles = StyleSheet.create({
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
});

export default Text;
