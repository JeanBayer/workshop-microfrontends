import { api } from "@api/api";
import type { X } from "@type/x";

export class XService {
  public static async getX() {
    try {
      const { data } = await api.get<X>("/x");
      return data;
    } catch (error) {
      // console.error("Error fetching x data:", error);
      throw new Error("Failed to fetch x data");
    }
  }
}
