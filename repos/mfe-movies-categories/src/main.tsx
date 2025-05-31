import { CategoryRow } from "@components/category/category-row";
import { useCategory } from "@hooks/useCategory";
import styles from "./main.module.css";

export function Main() {
  const { data, isError } = useCategory();

  if (isError) {
    return <section>Error</section>;
  }
  if (!data || data.length === 0) {
    return <section>No data available</section>;
  }

  return (
    <div className={styles.content}>
      {data?.map((category) => (
        <CategoryRow
          key={category.id}
          title={category.name}
          movies={category.movies}
        />
      ))}
    </div>
  );
}
