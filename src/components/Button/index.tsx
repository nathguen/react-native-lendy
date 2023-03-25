import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';

import Colors from '../../common/colors';
import Text from '../Text';

import { getButtonStyles, getButtonTextStyles } from './helpers';
import { buttonStyles } from './styles';
import type { ButtonProps } from './types';

export { getButtonStyles, getButtonTextStyles } from './helpers';
export { ButtonProps, ButtonSize, ButtonType, ButtonTypes } from './types';

const Button = (props: ButtonProps) => {
  // destrucuring props here so "props" can be passed to getButtonStyles
  const {
    color,
    disabled,
    fullWidth = false,
    icon,
    iconPosition,
    loading,
    loadingColor = Colors.White,
    onPress,
    size,
    title,
    titleStyle,
    type,
  } = props;

  const [isPressedDown, setIsPressedDown] = useState(false);

  const Wrapper = useMemo(() => {
    return disabled ? View : Pressable;
  }, [disabled]);

  const isDisabled = useMemo(() => {
    return disabled || loading;
  }, [disabled, loading]);

  const handleOnPress = useCallback(() => {
    if (isDisabled) return;

    if (onPress) {
      onPress();
    }
  }, [onPress, isDisabled]);

  const computedButtonStyles = useMemo(() => {
    return getButtonStyles({
      ...props,
      isDisabled,
      isPressedDown,
      fullWidth,
      type,
      size,
    });
  }, [props, isDisabled, isPressedDown, fullWidth, type, size]);

  const computedButtonTextStyles = useMemo(
    () =>
      getButtonTextStyles({
        ...props,
        isDisabled,
        isPressedDown,
        fullWidth,
        type,
        size,
      }),
    [props, isDisabled, isPressedDown, fullWidth, type, size]
  );

  const textColor = useMemo(() => {
    if (color) return color;

    if (titleStyle && titleStyle.color) return titleStyle.color;

    // @ts-ignore
    if (computedButtonTextStyles && computedButtonTextStyles.color) {
      // @ts-ignore
      return computedButtonTextStyles.color;
    }

    return '';
  }, [color, titleStyle, computedButtonTextStyles]);

  return (
    // @ts-ignore
    <Wrapper
      onPress={handleOnPress}
      onPressIn={() => setIsPressedDown(true)}
      onPressOut={() => setIsPressedDown(false)}
      // @ts-ignore
      style={computedButtonStyles}
    >
      <>
        {!!title && (
          <Text
            color={textColor as string}
            // @ts-ignore
            style={computedButtonTextStyles}
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

export default Button;
