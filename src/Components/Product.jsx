import { useEffect, useState } from "react";

export default function Product({ match }) {
  const [item, setItem] = useState([]);
  useEffect(() => fetchItem(), []);

  const fetchItem = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
    );
    const data = await response.json();
    setItem(data);
  };
  return <div>{item.id}</div>;
}
