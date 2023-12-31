import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions, Inventory } from "../store/inventory";
import { RootState } from "../store";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../App";
import ProductItem from "../components/ProductItem";

export default (props: StackScreenProps<StackParamList, "Home">) => {
  const fetching = useSelector((state: RootState) => state.inventory.fetching);
  const inventory = useSelector(selectors.selectInventory);
  const dispatch = useDispatch();

  const renderItem = ({ item }: { item: Inventory }) => {
    if (!item.fields["Product Name"] || item.fields["Product Name"] === "") {
      return null;
    }
    return <ProductItem item={item} />;
  };

  const ListEmptyComponent = () => {
    if (fetching) {
      return <ActivityIndicator size="large" color="#D4E5FF" />;
    }
    return null;
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      dispatch(actions.fetchInventory());
    });
    return unsubscribe;
  }, [props.navigation]);

  const insets = useSafeAreaInsets(); // Get safe area insets

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Inventory" />
      </Appbar.Header>

      <SafeAreaView
        style={{
          ...styles.listWrapper,
          marginBottom: insets.bottom - 30
        }}
      >
        <FlatList
          data={inventory}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={fetching}
              onRefresh={() => dispatch(actions.fetchInventory())}
            />
          }
        />
        <View style={{ ...styles.fabWrapper, bottom: insets.bottom }}>
          <FAB
            icon={() => (
              <MaterialCommunityIcons
                name="barcode"
                size={24}
                color="#0B5549"
              />
            )}
            label="Scan Product"
            onPress={() => props.navigation.navigate("Camera")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  fabWrapper: {
    position: "absolute",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
