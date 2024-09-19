import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const AllCategories = () => {
  const categories = [
    { id: "7", name: "Principais Notícias", icon: "newspaper" },
    { id: "1", name: "Negócios", icon: "business" },
    { id: "3", name: "Saúde", icon: "health-and-safety" },
    { id: "4", name: "Ciência", icon: "science" },
    { id: "5", name: "Esportes", icon: "sports" },
    { id: "6", name: "Tecnologia", icon: "computer" },
    { id: "9", name: "Covid-19", icon: "medical-services" },
    { id: "11", name: "Finanças", icon: "monetization-on" },
    { id: "12", name: "Comida", icon: "restaurant" },
    { id: "13", name: "Viagens", icon: "flight" },
    { id: "14", name: "Música", icon: "music-note" },
    { id: "17", name: "Jogos", icon: "videogame-asset" },
    { id: "18", name: "Filmes", icon: "movie" },  
    { id: "22", name: "Veículos", icon: "directions-car" },
  ];

  const router = useRouter();
  return (
    <LinearGradient
      colors={["#808080", "#ffff", "#808080"]}
      style={styles.container}
    >
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => {
              router.push(`/news/categories/${item.name}`);
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </LinearGradient>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 8,
    backgroundColor: "black",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  icon: {
    marginRight: 8,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
