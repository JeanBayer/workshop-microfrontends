import { api } from "@api/api";
import type { Category } from "@type/category";

export class CategoryService {
  public static async getCategories() {
    try {
      const { data } = await api.get<Category[]>("/categories");
      return data;
    } catch (error) {
      // console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories");
    }
  }
}
