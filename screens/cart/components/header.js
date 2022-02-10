import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="arrowleft" size={25} color="#191b1c" />
      <View style={styles.cart_holder}>
        <AntDesign
          name="search1"
          size={22}
          color="#191b1c"
          style={styles.icon}
        />
        <AntDesign
          name="shoppingcart"
          size={22}
          color="#191b1c"
          style={styles.icon}
        />
        <AntDesign
          name="sharealt"
          size={22}
          color="#191b1c"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f4f4f4",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cart_holder: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
  },
});
