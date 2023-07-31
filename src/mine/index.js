import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MineScreen({navigation}) {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={[styles.avatar]}>
          <Image
            source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Fe3deb69e-5f9e-e98c-d256-c7da0bad8fa9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693304758&t=b163fbc672efae70b1e114c0e5d9687a'}} 
            style={{width: 100, height: 100, borderRadius: 50, margin: 10}}
          />
        </View>
        <TouchableOpacity onPress={() => alert('登录or注册')}>
          <View style={[styles.listItem]}>
            <View style={[styles.fdr]}>
              <Ionicons name={'person'} size={20} color={'#bbb'}></Ionicons>
              <Text>姓名：北辰</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>
          </View>
          <View style={[styles.listItem]}>
            <View style={[styles.fdr]}>
              <Ionicons name={'car'} size={20} color={'#bbb'}></Ionicons>
              <Text>年龄：23</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>
          </View>
          <View style={[styles.listItem]}>
            <View style={[styles.fdr]}>
              <Ionicons name={'person'} size={20} color={'#bbb'}></Ionicons>
              <Text>性别：男</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>
          </View>
          {/* 爱好 */}
          <View style={[styles.listItem]}>
            <View style={[styles.fdr]}>
              <Ionicons name={'heart'} size={20} color={'#bbb'}></Ionicons>
              <Text>爱好：篮球、游戏、骑车、运动</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>
          </View>
          {/* 主要技术栈：Vue3\react\nodejs等 */}
          <View style={[styles.listItem]}>
            <View style={[styles.fdr]}>
              <Ionicons name={'cog'} size={20} color={'#bbb'}></Ionicons>
              <Text>主要技术栈：Vue3\react\nodejs等</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'   
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 15
  },
  // 改变主轴
  fdr: {
    flexDirection: 'row'
  },
})