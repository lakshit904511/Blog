import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import Spinner from "./components/Spinner";

export default function App() {
  const { fetchBlogPosts,darkMode,loading } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center dark:bg-gray-800">
            <Header />
            <Blogs />
           <Pagination />
     </div>
    </div>
  );

}
