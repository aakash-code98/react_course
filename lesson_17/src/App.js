import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { format } from "date-fns";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "lorem ipsum",
      datetime: "01/August/2012 11:17:56 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur qui culpa dolorum facilis consequuntur nemo, a ipsa. Sunt commodi consectetur adipisci repellat voluptatibus nisi vitae officia aut voluptatum accusamus quibusdam ipsam cupiditate nemo corrupti odit veritatis modi dolor, minima itaque ab possimus maiores, unde dolorem. Blanditiis cupiditate recusandae atque mollitia?",
    },
    {
      id: 2,
      title: "officia aut consequuntur ",
      datetime: "21/June/2008 09:37:54 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur qui culpa dolorum facilis consequuntur nemo, a ipsa. Sunt commodi consectetur adipisci repellat voluptatibus nisi vitae officia aut voluptatum accusamus quibusdam ipsam cupiditate nemo corrupti odit veritatis modi dolor, minima itaque ab possimus maiores, unde dolorem. Blanditiis cupiditate recusandae atque mollitia?",
    },
    {
      id: 3,
      title: "lorem voluptatum accusamus ipsum",
      datetime: " 01/April/2016 01:52:16 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur qui culpa dolorum facilis consequuntur nemo, a ipsa. Sunt commodi consectetur adipisci repellat voluptatibus nisi vitae officia aut voluptatum accusamus quibusdam ipsam cupiditate nemo corrupti odit veritatis modi dolor, minima itaque ab possimus maiores, unde dolorem. Blanditiis cupiditate recusandae atque mollitia?",
    },
    {
      id: 4,
      title: "lorem ipsum dolor sit, amet consectetur",
      datetime: " 05/December/2005 06:17:06 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur qui culpa dolorum facilis consequuntur nemo, a ipsa. Sunt commodi consectetur adipisci repellat voluptatibus nisi vitae officia aut voluptatum accusamus quibusdam ipsam cupiditate nemo corrupti odit veritatis modi dolor, minima itaque ab possimus maiores, unde dolorem. Blanditiis cupiditate recusandae atque mollitia?",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "dd/MMMM/yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
