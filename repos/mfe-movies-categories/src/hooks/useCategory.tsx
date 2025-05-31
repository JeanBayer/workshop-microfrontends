import { PLACEHOLDER_DATA } from "@constants/placeholder-data";
import { QUERY_KEYS } from "@constants/query-keys";
import { CategoryService } from "@services/category.service";
import { useQuery } from "@tanstack/react-query";

const MINUTE = 60 * 1000; // 1 minute in milliseconds

export const useCategory = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: CategoryService.getCategories,
    refetchOnWindowFocus: false,
    placeholderData: PLACEHOLDER_DATA.getCategories,
    staleTime: 10 * MINUTE,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
