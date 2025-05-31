import { api } from "@api/api";
import type { Movie } from "@type/movie";

export class MovieService {
  public static async getMovie(id: string) {
    try {
      const { data } = await api.get<Movie>(`/movies/${id}`);
      return data;
    } catch (error) {
      // console.error("Error fetching movie:", error);
      throw new Error("Failed to fetch movie");
    }
  }
}
