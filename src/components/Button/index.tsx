import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  ButtonProps as RNButtonProps,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import Colors from '../../common/colors';
import FontStyles from '../../common/fonts';
import CommonStyles from '../../common/styles';
import Text from '../Text';

export type ButtonSize = 'small' | 'medium' | 'large';
export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

interface ButtonProps extends RNButtonProps {
  type?: ButtonType | ButtonTypes;
  onPress?: () => void;

  backgroundColor?: string;
  color?: string;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  icon?: any;
  iconPosition?: 'left' | 'right';
  borderColor?: string;

  fullWidth?: boolean; // indicates if the button should take up its full width
}

const Button = ({
  type = ButtonTypes.Primary,
  onPress,
  title,
  backgroundColor,
  color,
  size = ButtonSizes.Large,
  buttonStyle,
  titleStyle,
  containerStyle,
  loading,
  loadingColor = Colors.White,
  disabled,
  icon,
  iconPosition = 'right',
  borderColor,
  fullWidth = false,
}: ButtonProps) => {
  const [isPressedDown, setIsPressedDown] = useState(false);

  const Wrapper = useMemo(() => {
    return disabled ? View : Pressable;
  }, [disabled]);

  const isDisabled = useMemo(() => {
    return disabled || loading;
  }, [disabled, loading]);

  const handleOnPress = useMemo(() => {
    if (isDisabled) return;

    if (onPress) {
      onPress();
    }
  }, [onPress, isDisabled]);

  const buttonTypeStyle = useMemo(() => {
    switch (type) {
      case ButtonTypes.Primary:
        return buttonStyles.primaryButton;

      case ButtonTypes.Secondary:
        return buttonStyles.secondaryButton;

      default:
        return buttonStyles.tertiaryButton;
    }
  }, [type]);

  const buttonTypeTextStyle: StyleSheet.NamedStyles<any> = useMemo(() => {
    switch (type) {
      case ButtonTypes.Primary:
        return buttonStyles.primaryButtonText;

      default:
        return {};
    }
  }, [type]);

  const disabledButtonStyle: StyleSheet.NamedStyles<any> = useMemo(() => {
    if (isDisabled) {
      if (type === ButtonTypes.Primary) {
        return buttonStyles.primaryButtonDisabled;
      }
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonDisabled;
      }
    }

    return {};
  }, [isDisabled, type]);

  const pressedButtonStyle: StyleSheet.NamedStyles<any> = useMemo(() => {
    if (isPressedDown) {
      if (type === ButtonTypes.Primary) {
        return buttonStyles.primaryButtonPressed;
      }
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonPressed;
      }
    }

    return {};
  }, [isPressedDown, type]);

  const disabledButtonTextStyle: StyleSheet.NamedStyles<any> = useMemo(() => {
    if (isDisabled) {
      if (type === ButtonTypes.Primary) {
        return buttonStyles.primaryButtonTextDisabled;
      }
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonTextDisabled;
      }
      if (type === ButtonTypes.Tertiary) {
        return buttonStyles.tertiaryButtonTextDisabled;
      }
    }

    return {};
  }, [isDisabled, type]);

  const pressedButtonTextStyle: StyleSheet.NamedStyles<any> = useMemo(() => {
    if (isPressedDown) {
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonTextPressed;
      }
      if (type === ButtonTypes.Tertiary) {
        return buttonStyles.tertiaryButtonTextPressed;
      }
    }

    return {};
  }, [isPressedDown, type]);

  const textColor = useMemo(() => {
    if (color) return color;

    if (titleStyle && titleStyle.color) return titleStyle.color;

    // @ts-ignore
    if (buttonTypeTextStyle && buttonTypeTextStyle.color) {
      // @ts-ignore
      return buttonTypeTextStyle.color;
    }

    // @ts-ignore
    if (disabledButtonTextStyle && disabledButtonTextStyle.color) {
      // @ts-ignore
      return disabledButtonTextStyle.color;
    }

    if (pressedButtonTextStyle && pressedButtonTextStyle.color) {
      return pressedButtonTextStyle.color;
    }

    return '';
  }, [
    color,
    titleStyle,
    buttonTypeTextStyle,
    disabledButtonTextStyle,
    pressedButtonTextStyle,
  ]);

  return (
    // @ts-ignore
    <Wrapper
      onPress={handleOnPress}
      onPressIn={() => setIsPressedDown(true)}
      onPressOut={() => setIsPressedDown(false)}
      // @ts-ignore
      style={{
        ...buttonStyles.wrapper,
        ...containerStyle,

        // button sizes
        ...(size === 'small' ? buttonStyles.smallButton : {}),
        ...(size === 'medium' ? buttonStyles.mediumButton : {}),
        ...(size === 'large' ? buttonStyles.largeButton : {}),

        // full width
        ...(fullWidth && buttonStyles.fullWidthButton),

        // button type
        ...buttonTypeStyle,

        // disabled style
        ...disabledButtonStyle,

        // pressed style
        ...pressedButtonStyle,

        ...buttonStyles.baseButton,

        // icon position
        ...(iconPosition === 'left' && buttonStyles.wrapperReverse),

        ...buttonStyle,
        ...(!!backgroundColor && { backgroundColor }),
        ...(!!borderColor && { borderColor }),
      }}
    >
      <>
        {!!title && (
          <Text
            color={textColor as string}
            // @ts-ignore
            style={{
              ...buttonStyles.baseButtonText,

              // button text sizes
              ...(size === 'small' ? buttonStyles.smallButtonText : {}),
              ...(size === 'medium' ? buttonStyles.mediumButtonText : {}),
              ...(size === 'large' ? buttonStyles.largeButtonText : {}),

              // button type
              ...buttonTypeTextStyle,

              // disabled text style
              ...disabledButtonTextStyle,

              // pressed text style
              ...pressedButtonTextStyle,

              ...titleStyle,
              ...(color ? { color } : {}),
            }}
          >
            {loading ? '' : title}
          </Text>
        )}

        {!!loading && (
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
              ...(!!title &&
                iconPosition === 'left' &&
                buttonStyles.iconWrapperPushRight),
              ...(!!title &&
                iconPosition === 'right' &&
                buttonStyles.iconWrapperPushLeft),
            }}
          >
            {icon}
          </View>
        )}
      </>
    </Wrapper>
  );
};

export const buttonStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
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
  },

  // TERTIARY BUTTON TEXT
  tertiaryButtonTextPressed: {
    color: Colors.Yellow,
  },

  tertiaryButtonTextDisabled: {
    color: Colors.Gray,
  },

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

export default Button;
