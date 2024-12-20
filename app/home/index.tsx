import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import useMovies from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPLayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPLayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator size={40} color="blue" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        <MainSlideshow movies={nowPLayingQuery.data ?? []} />

        {/* Populares */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Mejor Calificadas*/}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={() => topRatedQuery.fetchNextPage()}
        />

        {/* Próximamente*/}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
