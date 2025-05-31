import { api } from "@api/api";
import type { Movie } from "@type/movie";

export class HeroService {
  public static async getHero() {
    try {
      const { data } = await api.get<Movie>("/hero");
      return data;
    } catch (error) {
      // console.error("Error fetching hero data:", error);
      throw new Error("Failed to fetch hero data");
    }
  }
}
