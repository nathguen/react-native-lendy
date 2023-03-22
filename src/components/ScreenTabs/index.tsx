import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, View } from 'react-native';

import Colors from '../../common/colors';
import Text from '../Text';

interface ScreenTabsProps {
  tabs: string[];
  defaultTab?: string;
  onChangeTab?: (tab: string) => void;
}

const ScreenTabs = ({ tabs, defaultTab, onChangeTab }: ScreenTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab || tabs[0]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);

    if (onChangeTab && typeof onChangeTab === 'function') {
      onChangeTab(tab);
    }
  };

  return (
    <View style={styles.tabsWrapper}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => handleTabChange(tab)}
          style={styles.tabPressable}
        >
          <Text
            style={{
              ...styles.tabText,
              ...(tab === selectedTab && styles.tabTextActive),
            }}
          >
            {tab}
          </Text>

          <View
            style={{
              ...styles.tabUnderline,
              ...(tab === selectedTab && styles.tabUnderlineActive),
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  tabPressable: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  tabText: {
    marginBottom: 4,
    color: Colors.Gray,
  },
  tabTextActive: {
    color: Colors.Dark,
  },
  tabUnderline: {
    width: 42,
    borderColor: Colors.Yellow,
    borderWidth: 0,
    borderRadius: 2,
  },
  tabUnderlineActive: {
    borderWidth: 2,
  },
});

export default ScreenTabs;
