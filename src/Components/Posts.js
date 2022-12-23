import React, {
  // useState,
  useEffect,
  // useMemo,
  // useCallback
  useRef,
} from "react";
import usePost from "../Hooks/usePost";

// 3ta qoida
// 1 => Faqat Function Component da ishlidi
// 2 => Main Body (cb, condition, loop)
// 3 => Custom Hook

// LifeCycle Methods
// componentDidMount
// componentDidUnmount
// componentWillMount

// Side effect

// const logger = () => {
//   console.log("Scrolled");
// };

// ESLINT

const Posts = () => {
  // const [count, setCount] = useState(0);
  // const [test, setTest] = useState(0);
  const [posts, loading] = usePost();

  const mandarinRef = useRef();

  console.log("Redered");

  // if (!loading) {
  //   mandarinRef.current?.click();
  // }

  // if(true) {
  //   useEffect()
  // }

  // let cb = useCallback(() => {}, []);

  // let person = useMemo(() => {
  //   return {
  //     name: "John",
  //     age: 71,
  //     email: "john@gmail.com",
  //   };
  // }, []);

  // useEffect(() => {
  //   let unMounted = false;
  //   console.log("Rendered");
  //   // window.addEventListener("scroll", logger);

  //   async function getPosts() {
  //     let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     if (!unMounted) setPosts(res.data);
  //   }

  //   getPosts();

  //   return () => {
  //     unMounted = true;
  //     console.log("Unmounted");
  //     // window.removeEventListener("scroll", logger);
  //   };
  // }, [test, person, cb]);

  return (
    // loading ? (
    //   <div className="spinner-border"></div>
    // ) :
    <section>
      <a href="/mandarin.jpg" download={true} ref={mandarinRef}>
        Rasm yuklab olish
      </a>

      {/* <h1>{test}</h1>
      <button onClick={() => setTest(test + 1)}>Test+</button> */}
      <div className="container">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            {/* {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{post.userId}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default React.memo(Posts);
