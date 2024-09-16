import { gql, useQuery } from "@apollo/client";
import Headers from "./components/layout/Headers";
import HomePage from "./components/home/homePage";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blogs/:slug" element={<BlogPage />}></Route>
        <Route path="/authors/:slug" element={<AuthorPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
