import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const screen1 = ({navigation})=>{
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Image
        source={require("../assets/vs_blue.png")}
        style={{ width: 301, height: 361, marginLeft: 50, marginTop: -2 }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15, fontWeight: 400 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 23, height: 25 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>
            (Xem 828 đánh giá)
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>1.790.000 đ</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: "line-through",
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginLeft: -50,
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "red" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/Group 1.png")}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Pressable
         onPress={()=>{
          navigation.navigate('screen2')
         }}
          style={{
            width: 332,
            height: 34,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 400, marginTop: -5 }}>
            4 MÀU-CHỌN MÀU
          </Text>
          <Image
            source={require("../assets/Vector.png")}
            style={{ width: 12, height: 14, marginLeft: 280, marginTop: -35 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "red",
            width: 332,
            height: 44,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              marginTop: -5,
              color: "white",
            }}
          >
            CHỌN MÀU
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
 export default screen1;