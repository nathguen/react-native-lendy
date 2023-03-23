# react-native-lendy

A reusable component library for Lendy

## Installation

```sh
npm install react-native-lendy
```

## Components

### Button


The `<Button />` component has been designed to be used declaratively, but with flexibility in overriding its styles. Here is a minimum viable example:

```jsx
import { Button, Wrapper } from 'react-native-lendy';

// ...

const MyComponent = () => {
  const handleButtonPress = () => {};

  return (
    <Wrapper screen>
      <Button
        title="I am a button"
        onPress={handleButtonPress}
      />
    <Wrapper>
  );
};
```

See [Lendy Button snack](https://snack.expo.dev/@frostydog01/lendy-buttons) as an example.

#### Button types

There are three button types:

1. `primary`
2. `secondary`
3. `tertiary`

Here is an example of how you would use the `secondary` button type:

```jsx
import { Button, Wrapper } from 'react-native-lendy';

// ...

const MyComponent = () => {
  const handleButtonPress = () => {};

  return (
    <Wrapper screen>
      <Button
        type="secondary"
        title="I am a button"
        onPress={handleButtonPress}
      />
    <Wrapper>
  );
};
```


#### Button properties

While this `<Button />` component technically utilizes the React Native [`Pressable`](https://reactnative.dev/docs/pressable) component, it behaves more like the React Native [`Button`](https://reactnative.dev/docs/button) component, and therefore inherits the `Button` [props interface](https://reactnative.dev/docs/button#props). 

Additionally, some properties have been added for ease of use for my most common use cases.

All properties should be assumed as **optional** unless otherwise specified.

| Property | Type | Values | Notes |
|----------|------|--------|-------|
| type     | `string` | `primary`, `secondary`, `tertiary` | Defaults to `primary` |
| size | string | `large`, `medium`, `small` | Defaults to `large` |
| backgroundColor | string | | [React Native Style](https://reactnative.dev/docs/style) |
| color | `string` | | [React Native Style](https://reactnative.dev/docs/style) |
| borderColor | `string` | | Allows overriding the `borderColor` associated with the button `type`
| buttonStyle | `Object` | | Allows overriding the `Button` styles |
| titleStyle | `Object` | | Allows overriding the `Text` on the `Button` |
| containerStyle | `Object` | | Allows overriding the container styles on the `Button` |
| loading | `boolean` | `true`, `false` | Triggers loading styling on the button. Prevents presses. Defaults to `false` |
| loadingColor | `string` | | Overrides the `color` of the loading icon |
| disabled | `boolean` | `true`, `false` | Defaults to `false` |
| icon | `React.Component` | | Adds an icon to the button. No icon by default. |
| iconPosition | `string` | `left`, `right` | Defaults to `right` |
| fullWidth | `boolean` | `true`, `false` | Forces the button to use the full width available. Defaults to `false` |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
