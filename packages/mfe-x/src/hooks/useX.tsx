import { PLACEHOLDER_DATA } from "@constants/placeholder-data";
import { QUERY_KEYS } from "@constants/query-keys";
import { XService } from "@services/x.service";
import { useQuery } from "@tanstack/react-query";

const MINUTE = 60 * 1000; // 1 minute in milliseconds

export const useX = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.X],
    queryFn: XService.getX,
    refetchOnWindowFocus: false,
    placeholderData: PLACEHOLDER_DATA.getX,
    staleTime: 1 * MINUTE,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
