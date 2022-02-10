import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/header";
import Product from "./components/product";
import Bottom from "./components/bottom";

const Cart = () => {
  return (
    <>
      <Header />
      <Product />
      <Bottom />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
