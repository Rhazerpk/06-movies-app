import { View, Text, FlatList } from "react-native";
import React from "react";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold txt-2xl px-5">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item}></ActorCard>}
      />
    </View>
  );
};

export default MovieCast;
