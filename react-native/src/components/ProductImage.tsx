import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Inventory } from "../store/inventory";
import defaultImage from "../../assets/images/default-product-image.png";

type Props = {
  item: Inventory;
  showCategories: boolean;
};

export const ProductImage = ({ showCategories, item }: Props) => {
  // Calculate image size based on showCategories state
  const imageSize = showCategories
    ? styles.expandedImage
    : styles.collapsedImage;

  // Calculate default image size based on showCategories state
  const defaultImageSize = showCategories
    ? styles.expandedDefaultImage
    : styles.collapsedImage;

  return (
    <View accessibilityLabel="Product Image" style={styles.imageWrapper}>
      {item?.fields["Product Image"]?.length > 0 ? (
        <Image
          style={imageSize}
          source={{ uri: item?.fields["Product Image"] }}
        />
      ) : (
        <Image style={defaultImageSize} source={defaultImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  expandedImage: {
    height: 113, // Set the image height when categories are expanded
    width: 85 // Set the image width when categories are expanded
  },
  collapsedImage: {
    height: 64, // Set the image height when categories are collapsed
    width: 64 // Set the image width when categories are collapsed
  },
  expandedDefaultImage: {
    height: 85,
    width: 85
  },
  imageWrapper: {
    alignItems: "center"
  }
});
