import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList"


function App() {
  return (
    
    <div className="App">
      <Header name={blogData.name}/>
      <About 
        about={blogData.about}
        image={blogData.image}
      />
      <ArticleList posts={blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
