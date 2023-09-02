import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions, Inventory } from "../store/inventory";
import { RootState } from "../store";
import { SafeAreaView } from "react-native-safe-area-context";
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

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Inventory" />
      </Appbar.Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={fetching}
            onRefresh={() => dispatch(actions.fetchInventory())}
          />
        }
      >
        <SafeAreaView style={styles.listItems}>
          <FlatList
            data={inventory}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </ScrollView>

      <SafeAreaView style={styles.fab}>
        <FAB
          icon={() => (
            <MaterialCommunityIcons name="barcode" size={24} color="#0B5549" />
          )}
          label="Scan Product"
          onPress={() => props.navigation.navigate("Camera")}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 16,
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listItems: { alignItems: "center", marginBottom: 100 }
});
