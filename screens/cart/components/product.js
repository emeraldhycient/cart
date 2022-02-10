import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Product = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={require("../../../assets/images/shoe2.png")}
          style={styles.product}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
  },
});
