import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";

export const useMovies = () => {
  //Queries
  const nowPLayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "rated"],
    queryFn: ({pageParam}) =>  {
      return topRatedMoviesAction({page: pageParam});
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return{
    nowPLayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
  };
};

export default useMovies;
