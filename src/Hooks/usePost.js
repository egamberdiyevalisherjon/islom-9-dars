import axios from "axios";
import { useEffect, useState } from "react";

function usePost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let unMounted = false;

    async function getPosts() {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!unMounted) {
        setPosts(data);
        setLoading(false);
      }
    }

    setLoading(true);
    getPosts();

    return () => {
      unMounted = true;
    };
  }, [setLoading]);

  return [posts, loading];
}

export default usePost;
