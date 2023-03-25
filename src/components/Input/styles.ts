import { StyleSheet } from 'react-native';
import { Colors, CommonStyles } from '../../common';

export const styles = StyleSheet.create({
  input: {
    ...CommonStyles.Body,
    backgroundColor: Colors.White,
    borderRadius: 32,
    paddingHorizontal: 24,
    minHeight: 54,
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: Colors.Transparent,
  },

  inputActive: {
    borderColor: Colors.Yellow,
  },

  inputError: {
    borderColor: Colors.Red,
  },

  requiredText: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  errorMessage: {
    ...CommonStyles.Callout,
    marginTop: 4,
    color: Colors.Red,
  },

  validIconWrapper: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    height: '100%',
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  validIcon: {
    height: 28,
    width: 28,
    backgroundColor: Colors.Green,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  validIconText: {
    textAlign: 'center',
    color: Colors.White,
  },
});
