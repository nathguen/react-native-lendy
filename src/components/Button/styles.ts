import { StyleSheet } from 'react-native';

import { Colors, CommonStyles, FontStyles } from '../../common';

export const buttonStyles = StyleSheet.create({
  // BASE
  baseButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },

  baseButtonText: {
    textAlign: 'center',
  },

  wrapperReverse: {
    flexDirection: 'row-reverse',
  },

  fullWidthButton: {
    width: '100%',
  },

  // PRIMARY BUTTON
  primaryButton: {
    backgroundColor: Colors.Dark,
    borderColor: Colors.Dark,
    elevation: 1,
  },

  primaryButtonPressed: {
    backgroundColor: Colors.Yellow,
    borderColor: Colors.Yellow,
  },

  // PRIMARY BUTTON TEXT
  primaryButtonText: {
    color: Colors.White,
  },

  primaryButtonDisabled: {
    backgroundColor: Colors.MediumYellow,
    borderColor: Colors.MediumYellow,
  },

  primaryButtonTextDisabled: {
    color: Colors.Gray,
  },

  // SECONDARY BUTTON
  secondaryButton: {
    borderColor: Colors.Dark,
    backgroundColor: Colors.Transparent,
    fontWeight: FontStyles.semi,
  },

  secondaryButtonPressed: {
    borderColor: Colors.Yellow,
  },

  secondaryButtonDisabled: {
    borderColor: Colors.Gray,
  },

  // SECONDARY BUTTON TEXT
  secondaryButtonTextPressed: {
    color: Colors.Yellow,
  },

  secondaryButtonTextDisabled: {
    color: Colors.Gray,
  },

  // TERTIARY BUTTON
  tertiaryButton: {
    backgroundColor: Colors.Transparent,
    borderColor: Colors.Transparent,
    fontWeight: FontStyles.semi,
  },

  // TERTIARY BUTTON TEXT
  tertiaryButtonTextPressed: {
    color: Colors.Yellow,
  },

  tertiaryButtonTextDisabled: {
    color: Colors.Gray,
  },

  smallButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    minHeight: 30,
    minWidth: 40,
  },

  smallButtonText: {
    ...CommonStyles.Body,
  },

  mediumButton: {
    borderWidth: 2,
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingVertical: 16,
    height: 60,
    minWidth: 100,
  },

  mediumButtonText: {
    ...CommonStyles.Title3,
  },

  buttonDisabledText: {
    color: Colors.DarkGray,
  },

  largeButton: {
    borderWidth: 3,
    borderRadius: 30,
    paddingHorizontal: 44,
    paddingVertical: 16,
  },

  largeButtonText: {
    fontWeight: FontStyles.regular,
    fontSize: 20,
    lineHeight: 24,
  },

  loadingIconWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingIcon: {
    margin: 0,
    padding: 0,
  },

  iconWrapperPushLeft: {
    marginLeft: 8,
  },

  iconWrapperPushRight: {
    marginRight: 8,
  },
});
