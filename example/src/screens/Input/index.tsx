import React, { useMemo, useState } from 'react';
import { Wrapper, Input } from 'react-native-lendy';
import isEmail from 'validator/lib/isEmail';

const InputScreen = () => {
  const [email, setEmail] = useState('');

  const isValidEmail = useMemo(() => {
    return isEmail(email);
  }, [email]);

  return (
    <Wrapper screen>
      <Wrapper baseVertical>
        <Input
          placeholder="Enter your email"
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="emailAddress"
          isValid={isValidEmail}
          onChangeText={setEmail}
        />
      </Wrapper>

      <Wrapper baseVertical>
        <Input secureTextEntry placeholder="Enter your password" />
      </Wrapper>

      <Wrapper baseVertical>
        <Input
          editable={false}
          secureTextEntry
          placeholder="This is disabled"
        />
      </Wrapper>

      <Wrapper baseVertical>
        <Input
          secureTextEntry
          placeholder="Input with an error message"
          errorMessage="An error message"
        />
      </Wrapper>
    </Wrapper>
  );
};

export default InputScreen;
