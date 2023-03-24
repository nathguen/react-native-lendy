# react-native-lendy

A reusable component library for Lendy

## Demo

Check out this [expo snack](https://snack.expo.dev/@frostydog01/react-native-lendy-library?platform=web) to see the React Native Lendy library in action.

## Installation

```sh
npm install react-native-lendy
```

## Components

### Text

The `Text` component is a sweetened version of the React Native [`Text` component](https://reactnative.dev/docs/text). React Native Lendy provides some syntactic sugar for ease of rapid development.

#### Basic Usage


```jsx
import { Button, Wrapper } from 'react-native-lendy';

// ...

const MyComponent = () => {
  const handleButtonPress = () => {};

  return (
    <Wrapper screen>
      <Text center largeTitle>
        Title 1
      </Text>
    <Wrapper>
  );
};
```

The `center` (shorthand for `center={true}`) adds a `text-align: center` style to the `Text` component.

The `largeTitle` adds "Large Title" styling to the `Text` component based on the style guide. See the React Native Lendy [snack demo](https://snack.expo.dev/@frostydog01/react-native-lendy-library?platform=web) for context.


#### Declarative note

When building using the `Text` component, you may choose to use the `textType` property (e.g., `textType={"LargeTitle"}`), or the individual text type properties (e.g., `largeTitle`). 

React Native Lendy is designed to be declarative, but also acknowledge that it's nice to be able to have alternative paths to accomplish the same thing.

#### Text type properties

The **Default Value** should be assumed to be `false` unless otherwise specified. All properties on `Text` are **optional**.

All text type properties should be assumed to have the following properties unless otherwise stated:

* font weight: `400`
* color: `#191919` (`Colors.Dark`)

| Property | Accepted Values | Default Value | Notes |
|----------|------|---------------|-------|
| textType | `LargeTitle`, `Title1`, `Title2`, `Title3`, `Headline`, `Body`, `Callout`, `Subhead`, `Footnote`, `Caption1`, `Caption2` | `Body` | Can be used to declare `Text` type |
| `largeTitle` | `boolean` | | font size: `34` <br/>line height: `41` |
| `title1` | `boolean` | | font size: `28` <br/>line height: `34` |
| `title2` | `boolean` | | font size: `22` <br/>line height: `24` |
| `title3` | `boolean` | | font size: `20` <br/>line height: `24` |
| `headline` | `boolean` | | font size: `17` <br/>line height: `22` <br/>font family: `700` (`FontStyles.bold`) |
| `body` | `boolean` | `true` | font size: `17` <br/>line height: `22` |
| `callout` | `boolean` | | font size: `16` <br/>line height: `21` |
| `subhead` | `boolean` | | font size: `15` <br/>line height: `20` |
| `footnote` | `boolean` | | font size: `13` <br/>line height: `18` |
| `caption1` | `boolean` | | font size: `12` <br/>line height: `16` |
| `caption2` | `boolean` | | font size: `11` <br/>line height: `13` |


#### Other properties

All properties here are **optional** and should be assumed to **default** to `false` unless otherwise stated.

| Property | Type | Default Value | Notes |
|----------|------|---------------|-------|
| `color` | `string` | | Adds `color` styling to the `Text` |
| `left` | `boolean` | `true` | The default position for `Text` is to be left aligned |
| `center` | `boolean` | | Makes `Text` center aligned |
| `right` | `boolean` | | Makes `Text` right aligned |
| `bold` | `boolean` | | Makes `Text` **bold** |



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
| `type`     | `string` | `primary`, `secondary`, `tertiary` | Defaults to `primary` |
| `size` | string | `large`, `medium`, `small` | Defaults to `large` |
| `backgroundColor` | string | | [React Native Style](https://reactnative.dev/docs/style) |
| `color` | `string` | | [React Native Style](https://reactnative.dev/docs/style) |
| `borderColor` | `string` | | Allows overriding the `borderColor` associated with the button `type`
| `buttonStyle` | `Object` | | Allows overriding the `Button` styles |
| `titleStyle` | `Object` | | Allows overriding the `Text` on the `Button` |
| `containerStyle` | `Object` | | Allows overriding the container styles on the `Button` |
| `loading` | `boolean` | `true`, `false` | Triggers loading styling on the button. Prevents presses. Defaults to `false` |
| `loadingColor` | `string` | | Overrides the `color` of the loading icon |
| `disabled` | `boolean` | `true`, `false` | Defaults to `false` |
| `icon` | `React.Component` | | Adds an icon to the button. No icon by default. |
| `iconPosition` | `string` | `left`, `right` | Defaults to `right` |
| `fullWidth` | `boolean` | `true`, `false` | Forces the button to use the full width available. Defaults to `false` |




### Wrapper

The `<Wrapper />` component is a sweetened version of the React Native `<View />` component. It uses a **Base 4** spacing system.

```jsx
import { Button, Wrapper, Text } from 'react-native-lendy';

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

      <Wrapper base>
        <Text>Some text</Text>
      </Wrapper>

      <Wrapper row>
        <Wrapper baseHorizontal>
          <Text>Item 1</Text>
        </Wrapper>

        <Wrapper baseHorizontal>
          <Text>Item 2</Text>
        </Wrapper>
      </Wrapper>
    <Wrapper>
  );
};
```

##### Explanation

The `screen` (shorthand for `screen={true}`) is used to add a padding of `16` pixels around its children.

The `base` adds a padding of `4` around its children.

The `row` adds `flex: row` to the `Wrapper`, so that its children are displayed inline.

#### Wrapping properties

All properties here are **optional**.

| Property | Type | Default Value | Notes |
|----------|------|---------------|-------|
| `screen` | `boolean` | `false` | Adds a **padding** of `16` around its children |
| `base` | `boolean` | `false` | Adds a padding of `4` around its children|
| `baseHorizontal` | `boolean` | `false` | Adds a **padding** of `4` on the left and right sides of its children (a.k.a., *horizontal*)|
| `baseVertical`| `boolean` | `false` | Adds a **padding** of `4` on the top and bottom of its children (a.k.a., *vertical*) |
| `padding` | `number` | `0` | Allows override of the **padding** around its children |
| `row` | `boolean` | `false` | Adds `flex: row` to the `Wrapper` so that its children are displayed inline |
| `center` | `boolean` | `false` | Adds `justify-content: center` and `align-items: center` to the `Wrapper` so that its children are displayed in the **vertical** and **horizontal** center |



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
