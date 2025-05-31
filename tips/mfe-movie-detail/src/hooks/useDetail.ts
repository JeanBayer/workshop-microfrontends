import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@constants/query-key";
import { MovieService } from "@services/movie.service";

const MINUTE = 60 * 1000; // 1 minute in milliseconds

export const useDetail = (id: string) => {
    const query = useQuery({
        queryKey: [QUERY_KEYS.DETAIL, id],
        queryFn: () => MovieService.getMovie(id),
        refetchOnWindowFocus: false,
        staleTime: 10 * MINUTE,
    })
    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
    }
}