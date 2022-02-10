import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons";

const Bottom = () => {
  const [qty, setqty] = useState(1);
  const [price, setprice] = useState(25000);

  const incrementQty = (max) => {
    if (qty <= max) {
      getCurrentPrice();
      setqty((num) => num + 1);
    } else {
      Alert.alert("max qty exceeded");
    }
  };

  const decrementQty = (min) => {
    if (qty > min) {
      setqty((num) => num - 1);
    } else {
      Alert.alert("min qty exceeded");
    }
  };

  const getCurrentPrice = () => {
    const newPrice = price * qty;

    setprice((prev) => newPrice);
  };

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    getCurrentPrice();
  }, [qty]);

  return (
    <View style={styles.bottom}>
      {/*  starting indicator */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 7,
        }}
      >
        <View
          style={[styles.dot, { borderColor: "#1899ff", borderWidth: 2 }]}
        ></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>

      {/*  ending indicator */}

      {/*  starting title*/}
      <View style={styles.title}>
        <View>
          <Text style={styles.title_header}>Twinkles</Text>
          <Text>1 available,more quantity available on preorder</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="star" color="#e38967" size={23} />
            <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 4 }}>
              5.0
            </Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "#6dc2fb" }}>
            Reviews
          </Text>
        </View>
      </View>
      {/*  ending title*/}

      {/*  starting  price*/}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 13,
        }}
      >
        <View style={styles.quantity}>
          <TouchableOpacity onPress={(e) => incrementQty(4)}>
            <AntDesign name="plus" size={18} />
          </TouchableOpacity>
          <Text>{qty}</Text>
          <TouchableOpacity onPress={(e) => decrementQty(1)}>
            <AntDesign name="minus" size={18} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="currency-ngn" size={26} />
          <Text style={{ fontSize: 24, fontWeight: "900", marginLeft: 4 }}>
            {currencyFormat(price)}
          </Text>
        </View>
      </View>

      {/*  starting  price*/}

      {/*  starting description*/}

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 7 }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 26,
          }}
        >
          Discover your style in our all new twinkle mules featuring a brown
          African pattern, leather soles and our very own spinel logo embroiled
          to the feet area.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 7,
          }}
        >
          <View></View>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#6dc2fb" }}>
            Read more
          </Text>
        </View>
      </View>
      {/*  starting description*/}

      {/*  starting size */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 13,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "400", marginRight: 4 }}>
            Size
          </Text>
          <View style={styles.size_circle}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>45.5 uk</Text>
          </View>
        </View>
        <Text style={{ fontSize: 23, fontWeight: "400", color: "#c4c4c4" }}>
          Size guide
        </Text>
      </View>
      {/*  ending size */}

      {/*  starting varing size */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-starting",
          marginBottom: 7,
          marginTop: 10,
        }}
      >
        <View
          style={[
            styles.circle,
            { borderColor: "#1899ff", borderWidth: 2, backgroundColor: "#000" },
          ]}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#6dc2fb" }}>
            45.5
          </Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>40</Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>39.5</Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>38</Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>36</Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>32</Text>
        </View>
      </View>
      {/*  ending varing size */}
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#ffffff",
    height:
      Dimensions.get("window").height - Dimensions.get("window").height / 3,
    borderTopRightRadius: 50,
    marginTop: -25,
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: "#c4c4c4",
    margin: 5,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title_header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e38967",
  },
  quantity: {
    backgroundColor: "#c4c4c4",
    height: 30,
    width: 100,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  size_circle: {
    borderColor: "#c4c4c4",
    borderWidth: 1,
    height: 30,
    width: 70,
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 39,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#fafafa",
    margin: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
