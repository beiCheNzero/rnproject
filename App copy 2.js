import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from 'react-native-tab-navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/home'
import EditScreen from './src/edit'
import MineScreen from './src/mine'

function App() {
  state = {
    selectedTab: 'home',
    page: [
        {
          selected: 'home',
          title: '首页',
          renderIcon: () => <Ionicons name='home' size={20} color={'#888'} />,
          renderSelectedIcon: () => <Ionicons name='home-outline' size={20} color={'#F00'} />,
          onPress: () => alert(this.state.selectedTab),
          component: <HomeScreen />
        },
        {
          selected: 'edit',
          title: '发布',
          renderIcon: () => <Ionicons name='add' size={20} color={'#888'} />,
          renderSelectedIcon: () => <Ionicons name='add-outline' size={20} color={'#F00'} />,
          onPress: () => this.setState({ selectedTab: 'edit' }),
          component: <EditScreen />
        },
        {
          selected: 'mine',
          title: '我的',
          renderIcon: () => <Ionicons name='hammer' size={20} color={'#888'} />,
          renderSelectedIcon: () => <Ionicons name='hammer-outline' size={20} color={'#F00'} />,
          onPress: () => this.setState({ selectedTab: 'mine' }),
          component: <MineScreen />
        },
      ]
    }
  return (
    <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
      <TabNavigator >
        {
          this.state.page.map((v, i) =>
            <TabNavigator.Item key={i}
              selected={v.selected === this.state.selectedTab}
              title={v.title}
              renderIcon={v.renderIcon}
              renderSelectedIcon={v.renderSelectedIcon}
              onPress={v.onPress}
              selectedTitleStyle={{ color: "#c863b5" }}
              tabStyle={{
                  backgroundColor: "#eee", justifyContent: "center"
              }}
            >
              {v.component}
            </TabNavigator.Item>
          )
        }
        {/* <TabNavigator.Item key={100}
          selected={this.state.selectedTab === 'mine'}
          title='测试'
          renderIcon={() => <Ionicons name='hammer' size={20} color={'#888'} />}
          renderSelectedIcon={() => <Ionicons name='hammer-outline' size={20} color={'#F00'} />}
          onPress={() => this.setState({ selectedTab: 'mine' })}
          selectedTitleStyle={{ color: "#c863b5" }}
          tabStyle={{
            backgroundColor: "#eee", justifyContent: "center"
          }}
        >
          <MineScreen />
        </TabNavigator.Item> */}
      </TabNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  }
});

export default App;
