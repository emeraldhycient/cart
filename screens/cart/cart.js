import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "./components/header";
import Product from "./components/product";
import Bottom from "./components/bottom";

const Cart = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Product />
          <Bottom />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
