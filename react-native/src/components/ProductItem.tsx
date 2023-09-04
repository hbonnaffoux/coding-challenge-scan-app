import React, { useCallback, useState } from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";
import { Inventory } from "../store/inventory";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

interface IProductItem {
  item: Inventory;
}

const { width } = Dimensions.get("window"); // Get the screen width

const ProductItem = ({ item }: IProductItem) => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories((prevShowCategories) => !prevShowCategories);
  };

  const containerHeight = showCategories
    ? styles.expandedContainer
    : styles.collapsedContainer;

  return (
    <View
      style={[styles.container, containerHeight]}
      accessibilityLabel="Product Item Container"
    >
      <ProductImage item={item} showCategories={showCategories} />
      <View style={{ flex: 1 }}>
        <ProductInfo
          item={item}
          showCategories={showCategories}
          toggleCategories={toggleCategories}
        />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#F8F9FC",
    flexDirection: "row",
    flex: 1,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(27, 38, 51, 0.25)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3
      },
      android: {
        elevation: 3
      }
    })
  },
  expandedContainer: {
    minHeight: 120 // Set the height when categories are expanded
  },
  collapsedContainer: {
    minHeight: 80 // Set the height when categories are collapsed
  }
});
