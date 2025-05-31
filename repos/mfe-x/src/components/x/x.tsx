import { money, userImg } from "@assets/images";
import { useX } from "@hooks/useX";
import styles from "./x.module.css";

export const X = () => {
  const { data, isError } = useX();

  if (isError && !data) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.card}>
      <img src={userImg} alt="user" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <p className="text-xs text-gray-500">{data?.id}</p>
        <img src={money} alt="money" className="w-4 h-4" />
        <p className="text-xs text-gray-500">User</p>
      </div>
      <button className="bg-blue-500 text-white px-2 py-1 rounded">
        Button
      </button>
    </div>
  );
};
