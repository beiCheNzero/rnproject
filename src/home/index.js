import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import WaterfallFlow from 'react-native-waterfall-flow'
import MasonryList from 'react-native-masonry-list';

export default function HomeScreen({navigation}) {
  // data初始化并有数据
  const data = [
    '../../assets/favicon.png',
    '../../assets/adaptive-icon.png',
    '../../assets/icon.png',
    '../../assets/qidong.png',
  ]
  const waterfallData = [
    { uri: 'https://th.bing.com/th/id/R.43ac7b50345dceef8d542ddd3bf2f823?rik=j7lIkACZqwVQqQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180913%2f98aa3b33d2784dc3a5891254fb51b0bd.jpg&ehk=utklk8mu%2bUpUszVj15MDNzYhuqcaCfveoR2TORolVts%3d&risl=&pid=ImgRaw&r=0' },
    { uri: 'https://th.bing.com/th/id/OIP.zeW3djT8Ey9pdtwvg_Yx8QHaHa?pid=ImgDet&rs=1' },
    { uri: 'https://th.bing.com/th/id/R.43ac7b50345dceef8d542ddd3bf2f823?rik=j7lIkACZqwVQqQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180913%2f98aa3b33d2784dc3a5891254fb51b0bd.jpg&ehk=utklk8mu%2bUpUszVj15MDNzYhuqcaCfveoR2TORolVts%3d&risl=&pid=ImgRaw&r=0' },
    { uri: 'https://th.bing.com/th/id/OIP.zeW3djT8Ey9pdtwvg_Yx8QHaHa?pid=ImgDet&rs=1' },
    { uri: 'https://th.bing.com/th/id/OIP.zeW3djT8Ey9pdtwvg_Yx8QHaHa?pid=ImgDet&rs=1' },
    { uri: 'https://th.bing.com/th/id/R.43ac7b50345dceef8d542ddd3bf2f823?rik=j7lIkACZqwVQqQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180913%2f98aa3b33d2784dc3a5891254fb51b0bd.jpg&ehk=utklk8mu%2bUpUszVj15MDNzYhuqcaCfveoR2TORolVts%3d&risl=&pid=ImgRaw&r=0' },
    { uri: 'https://img.gmz88.com:4433/uploadimg/image/20190427/20190427213518_75483.jpg' },
    { uri: 'https://img.gmz88.com:4433/uploadimg/image/20190427/20190427213518_75483.jpg' },
    { uri: 'https://img.gmz88.com:4433/uploadimg/image/20190427/20190427213518_75483.jpg' },
  ];

  return (
    <View style={[styles.container]}>
      <MasonryList
        images={waterfallData}
        columns={2} // Number of columns in the layout
        imageContainerStyle={styles.imageContainer}
        renderIndividualHeader={(data) => (
          <Text>{data.title}</Text>
        )}
        onPressImage={(data) => {
          // Handle image click here
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
