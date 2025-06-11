import { PLACEHOLDER_DATA } from "@constants/placeholder-data";
import { QUERY_KEYS } from "@constants/query-keys";
import { HeroService } from "@services/hero.service";
import { useQuery } from "@tanstack/react-query";

const MINUTE = 60 * 1000; // 1 minute in milliseconds

export const useHero = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.HERO],
    queryFn: HeroService.getHero,
    refetchOnWindowFocus: false,
    placeholderData: PLACEHOLDER_DATA.getHero,
    staleTime: 1 * MINUTE,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
