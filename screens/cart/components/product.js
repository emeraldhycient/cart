import { Image, StyleSheet, Dimensions, View } from "react-native";
import React from "react";

const Product = () => {
  return (
    <View style={{ padding: 0, margin: 0 }}>
      <Image
        source={require("../../../assets/images/shoe2.png")}
        style={styles.product}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    left: 0,
    right: 0,
  },
});
