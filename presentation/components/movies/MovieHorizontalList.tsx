import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import React, { useEffect, useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string; 
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  useEffect(() =>{
    setTimeout(() => {
      isLoading.current = false;
    }, 2000);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if(isEndReached) return;

    isLoading.current = true;
    
    // TODO
    console.log('Cargar siguientes películas');
    loadNextPage && loadNextPage();
  }

  return (
    <View className={`${className}`}>
      {title && <Text className="text-2xl font-bold px-4 mt-2">{title}</Text>}
      <FlatList
        horizontal={true}
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
