import { StyleSheet } from 'react-native';

import Colors from './colors';
import FontStyles from './fonts';

const baselineStyles = StyleSheet.create({
  base: {
    fontWeight: FontStyles.regular,
    color: Colors.Dark,
  },
});

const CommonStyles = StyleSheet.create({
  LargeTitle: {
    ...baselineStyles.base,
    fontSize: 34,
    lineHeight: 41,
  },
  Title1: {
    ...baselineStyles.base,
    fontSize: 28,
    lineHeight: 34,
  },
  Title2: {
    ...baselineStyles.base,
    fontSize: 22,
    lineHeight: 28,
  },
  Title3: {
    ...baselineStyles.base,
    fontSize: 20,
    lineHeight: 24,
  },
  Headline: {
    ...baselineStyles.base,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: FontStyles.bold,
  },
  Body: {
    ...baselineStyles.base,
    fontSize: 17,
    lineHeight: 22,
  },
  Callout: {
    ...baselineStyles.base,
    fontSize: 16,
    lineHeight: 21,
  },
  Subhead: {
    ...baselineStyles.base,
    fontSize: 15,
    lineHeight: 20,
  },
  Footnote: {
    ...baselineStyles.base,
    fontSize: 13,
    lineHeight: 18,
  },
  Caption1: {
    ...baselineStyles.base,
    fontSize: 12,
    lineHeight: 16,
  },
  Caption2: {
    ...baselineStyles.base,
    fontSize: 11,
    lineHeight: 13,
  },

  filterInput: {
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 4,
    textAlign: 'center',
    paddingVertical: 8,
    flex: 1,
    minHeight: 36,
  },
  filterInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default CommonStyles;
