import React, { useMemo, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ChevronDown } from "../../assets/icons/ChevronDown";
import { ChevronUp } from "../../assets/icons/ChevronUp";
import { New } from "../../assets/icons/New";
import { getFormattedDate } from "../utils/getFormattedDate";
import { Inventory } from "../store/inventory";
import { isNewProduct } from "../utils/isNewProduct";

type Props = {
  item: Inventory;
  showCategories: boolean;
  toggleCategories: () => void;
};

export const ProductInfo = ({
  item,
  showCategories,
  toggleCategories
}: Props) => {
  const categories = item?.fields["Product Categories"]?.split(",");

  const formattedDate = useMemo(
    () => getFormattedDate(item.createdTime),
    [item]
  );
  const isNew = useMemo(() => isNewProduct(item.createdTime), [item]);

  return (
    <View accessibilityLabel="Product Info" style={styles.infoContainer}>
      <View style={styles.infoWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              styles.textName,
              showCategories
                ? { width: 120 } // Set width when categories are displayed
                : { width: 130 } // Set width when categories are not displayed
            ]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item?.fields["Product Name"]}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {isNew && <New style={{ marginRight: 16 }} />}
          {/* Toggle categories visibility based on the state */}
          {showCategories ? (
            <TouchableOpacity onPress={toggleCategories}>
              <ChevronDown />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleCategories}>
              <ChevronUp />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text style={styles.textDate}>{formattedDate}</Text>

      {showCategories && (
        <View style={styles.categoriesWrapper}>
          {categories?.map((category) => (
            <View key={category} style={styles.categories}>
              <Text>{category}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textName: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 22,
    color: "#1B2633"
  },
  textDate: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color: "#1B2633",
    marginTop: 2
  },
  infoContainer: {
    padding: 8
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  categories: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#D4E5FF",
    borderRadius: 48,
    flexDirection: "row",
    marginRight: 4,
    marginBottom: 10
  },
  categoriesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 12,
    maxWidth: 245
  }
});
