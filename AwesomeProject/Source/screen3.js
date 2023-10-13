import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [image, setImage] = useState(require("../assets/vs_red.png"));
  return (
    <View style={{flex:1}}>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View>
        <Image
          source={image}
          style={{ width: 112, height: 132 }}
        />
        </View>
        <View>
        <Text
          style={{
            width: 164,
            height: 17,
            marginTop: 17,
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "17.58px",
            marginLeft: 30,
          }}
        >
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
        <Text
          style={{
            width: 164,
            height: 17,
            marginTop: 17,
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "17.58px",
            marginLeft: 30,
          }}
        >
          Màu: đỏ
        </Text>
        <Text
          style={{
            width: 164,
            height: 17,
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "17.58px",
            marginLeft: 30,
          }}
        >
          Cung cấp bởi Tiki Tradding
        </Text>
        <Text
          style={{
            width: 164,
            height: 17,
            marginTop: 17,
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "17.58px",
            marginLeft: 30,
          }}
        >
          1.790.000 đ
        </Text>
        </View>
        </View>
      <View
        style={{ flex: 7, backgroundColor: "#C4C4C4" }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 400,
            marginLeft: 17,
            marginTop: 20,
          }}
        >
          Chọn một màu bên dưới:
        </Text>
        <Pressable style={{backgroundColor:'#C5F1FB', width:85, height:70, marginLeft:175, marginTop:20}} onPress={() =>{
            setImage(require('../assets/vs_silver.png'));
          }}>
        </Pressable>
        <Pressable style={{backgroundColor:'#F30D0D', width:85, height:70, marginLeft:175, marginTop:20}} onPress={() =>{
            setImage(require('../assets/vs_red.png'));
          }}>
        </Pressable>
        <Pressable style={{backgroundColor:'#000000', width:85, height:70, marginLeft:175, marginTop:20}} onPress={() =>{
            setImage(require('../assets/vs_black.png'));
          }}>
        </Pressable>
        <Pressable style={{backgroundColor:'#234896', width:85, height:70, marginLeft:175, marginTop:20}} onPress={() =>{
            setImage(require('../assets/vs_blue.png'));
          }}>
        </Pressable>
        <Pressable style={{backgroundColor:'#234896', width:326, height:40, marginLeft:50, marginTop:20, borderWidth:1,borderRadius:10 }}>
          <Text style={{fontSize:20, fontWeight:700, color:'white', marginLeft:140, marginTop:5 }}>
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
