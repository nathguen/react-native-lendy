import React, { useState } from 'react';
import { View } from 'react-native';
import { ScreenTabs, Text, Wrapper } from 'react-native-lendy';

const screenTabs: string[] = ['Tab One', 'Tab Two', 'Tab Three'];

const ScreenTabsScreen = () => {
  const [activeTab, setActiveTab] = useState(screenTabs[0]);

  return (
    <Wrapper screen>
      <ScreenTabs
        defaultTab={activeTab}
        onChangeTab={setActiveTab}
        tabs={screenTabs}
      />

      {activeTab === 'Tab One' && (
        <View>
          <Text center title1>
            Content for Tab One
          </Text>
        </View>
      )}

      {activeTab === 'Tab Two' && (
        <View>
          <Text center title1>
            Content for Tab Two
          </Text>
        </View>
      )}

      {activeTab === 'Tab Three' && (
        <View>
          <Text center title1>
            Content for Tab Three
          </Text>
        </View>
      )}
    </Wrapper>
  );
};

export default ScreenTabsScreen;
