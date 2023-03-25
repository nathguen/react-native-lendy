import { buttonStyles } from './styles';
import {
  ButtonProps,
  ButtonSize,
  ButtonSizes,
  ButtonType,
  ButtonTypes,
} from './types';

interface ButtonStylesProps extends ButtonProps {
  size?: ButtonSize | ButtonSizes;
  type?: ButtonType | ButtonTypes;
  color?: string;
  isDisabled?: boolean;
  isPressedDown?: boolean;
  fullWidth?: boolean;
  titleStyle?: React.CSSProperties;

  iconPosition?: 'left' | 'right';
  buttonStyle?: React.CSSProperties;
}

export const getButtonStyles = (props?: ButtonStylesProps) => {
  const {
    backgroundColor,
    borderColor,
    buttonStyle,
    containerStyle,
    fullWidth,
    iconPosition = 'right',
    isDisabled,
    isPressedDown,
    size = ButtonSizes.Large,
    type = ButtonTypes.Primary,
  } = props || {};

  const getButtonTypeStyle = () => {
    switch (type) {
      case ButtonTypes.Primary:
        return buttonStyles.primaryButton;

      case ButtonTypes.Secondary:
        return buttonStyles.secondaryButton;

      default:
        return buttonStyles.tertiaryButton;
    }
  };

  const getPressedButtonStyle = () => {
    if (isPressedDown) {
      if (type === ButtonTypes.Primary) {
        return buttonStyles.primaryButtonPressed;
      }
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonPressed;
      }
    }

    return {};
  };

  const getDisabledButtonStyle = () => {
    if (isDisabled) {
      if (type === ButtonTypes.Primary) {
        return buttonStyles.primaryButtonDisabled;
      }
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonDisabled;
      }
    }

    return {};
  };

  return {
    ...buttonStyles.baseButton,

    // button sizes
    ...(size === 'small' ? buttonStyles.smallButton : {}),
    ...(size === 'medium' ? buttonStyles.mediumButton : {}),
    ...(size === 'large' ? buttonStyles.largeButton : {}),

    // icon position
    ...(iconPosition === 'left' && buttonStyles.wrapperReverse),

    ...getButtonTypeStyle(),
    ...getPressedButtonStyle(),
    ...getDisabledButtonStyle(),

    ...(fullWidth && buttonStyles.fullWidthButton),
    ...(!!borderColor && { borderColor }),
    ...(!!backgroundColor && { backgroundColor }),
    ...containerStyle,
    ...buttonStyle,
  };
};

export const getButtonTextStyles = (props?: ButtonStylesProps) => {
  const {
    size = ButtonSizes.Large,
    type = ButtonTypes.Primary,
    color,
    isDisabled,
    isPressedDown,
    titleStyle,
  } = props || {};

  const getDisabledButtonTextStyle = () => {
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
  };

  const getPressedButtonTextStyle = () => {
    if (isPressedDown) {
      if (type === ButtonTypes.Secondary) {
        return buttonStyles.secondaryButtonTextPressed;
      }
      if (type === ButtonTypes.Tertiary) {
        return buttonStyles.tertiaryButtonTextPressed;
      }
    }

    return {};
  };

  const getButtonTypeTextStyle = () => {
    switch (type) {
      case ButtonTypes.Primary:
        return buttonStyles.primaryButtonText;

      default:
        return {};
    }
  };

  return {
    ...buttonStyles.baseButtonText,

    // button text sizes
    ...(size === 'small' ? buttonStyles.smallButtonText : {}),
    ...(size === 'medium' ? buttonStyles.mediumButtonText : {}),
    ...(size === 'large' ? buttonStyles.largeButtonText : {}),

    ...titleStyle,
    ...getButtonTypeTextStyle(),
    ...getPressedButtonTextStyle(),
    ...getDisabledButtonTextStyle(),
    ...(color ? { color } : {}),
  };
};
