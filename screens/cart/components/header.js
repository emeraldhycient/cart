import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={25} color="#191b1c" />
      </TouchableOpacity>
      <View style={styles.cart_holder}>
        <TouchableOpacity>
          <AntDesign
            name="search1"
            size={22}
            color="#191b1c"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="shoppingcart"
            size={22}
            color="#191b1c"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="sharealt"
            size={22}
            color="#191b1c"
            style={styles.icon}
          />
        </TouchableOpacity>
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
