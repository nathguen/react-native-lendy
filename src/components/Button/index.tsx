/* eslint-disable react-native/no-inline-styles */
import { Text } from '@rneui/themed';
import React, { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../../common/styles';
import Colors from '../../common/colors';
import FontStyles from '../../common/fonts';
import { View } from 'react-native';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  onPress: () => void;
  title?: string;
  backgroundColor?: string;
  color?: string;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  isLoading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  icon?: any;
  iconPosition?: 'left' | 'right';
  borderColor?: string;
}

const Button = ({
  onPress,
  title,
  backgroundColor = Colors.LightYellow,
  color,
  size = 'small',
  buttonStyle,
  titleStyle,
  containerStyle,
  isLoading,
  loadingColor = Colors.White,
  disabled,
  icon,
  iconPosition = 'right',
  borderColor,
}: ButtonProps) => {
  const Wrapper = useMemo(() => {
    return disabled ? View : TouchableOpacity;
  }, [disabled]);

  return (
    // @ts-ignore
    <Wrapper
      onPress={disabled ? () => {} : onPress}
      style={{
        ...containerStyle,
        borderRadius: 16,
        alignSelf: 'flex-start',
        ...buttonStyles.baseButton,
        flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row',
        ...(size === 'small' ? buttonStyles.smallButton : {}),
        ...(size === 'medium' ? buttonStyles.mediumButton : {}),
        ...(size === 'large' ? buttonStyles.largeButton : {}),
        ...(disabled || isLoading ? buttonStyles.disabledButton : {}),
        ...((disabled || isLoading) && size === 'medium'
          ? buttonStyles.mediumButtonDisabled
          : {}),
        ...buttonStyle,
        backgroundColor,
        [borderColor ? 'borderColor' : '']: borderColor,
      }}
    >
      {!!title && (
        <Text
          // @ts-ignore
          style={{
            ...buttonStyles.baseButtonText,
            ...(size === 'small' ? buttonStyles.smallButtonText : {}),
            ...(size === 'medium' ? buttonStyles.mediumButtonText : {}),
            ...(size === 'large' ? buttonStyles.largeButtonText : {}),
            ...(disabled && size === 'medium'
              ? buttonStyles.mediumButtonTextDisabled
              : {}),
            ...titleStyle,
            ...(color ? { color } : {}),
          }}
        >
          {isLoading ? '' : title}
        </Text>
      )}

      {!!isLoading && (
        <View style={buttonStyles.loadingIconWrapper}>
          <ActivityIndicator
            style={buttonStyles.loadingIcon}
            color={loadingColor}
          />
        </View>
      )}

      {!!icon && (
        <View
          style={{
            marginLeft: !!title && iconPosition === 'left' ? 0 : 8,
            marginRight: !!title && iconPosition === 'right' ? 0 : 8,
          }}
        >
          {icon}
        </View>
      )}
    </Wrapper>
  );
};

export const buttonStyles = StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  baseButtonText: {
    textAlign: 'center',
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
    backgroundColor: Colors.Transparent,
    borderColor: Colors.Dark,
    borderWidth: 2,
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingVertical: 16,
    height: 60,
    minWidth: 100,
  },
  mediumButtonDisabled: {
    borderColor: Colors.DarkGray,
  },
  mediumButtonText: {
    ...CommonStyles.Title3,
  },
  mediumButtonTextDisabled: {
    color: Colors.DarkGray,
  },

  largeButton: {
    backgroundColor: Colors.Transparent,
    borderColor: Colors.Dark,
    borderWidth: 3,
    borderRadius: 30,
    paddingHorizontal: 44,
    paddingVertical: 16,
  },
  largeButtonText: {
    fontFamily: FontStyles.medium,
    fontSize: 20,
    lineHeight: 24,
  },

  disabledButton: {
    backgroundColor: Colors.DarkGray,
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
});

export default Button;
