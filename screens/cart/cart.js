import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";
import Header from "./components/header";
import Product from "./components/product";
import Bottom from "./components/bottom";

const Cart = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Product />
        <Bottom />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
});
