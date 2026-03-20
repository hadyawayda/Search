import { useState, useEffect } from "react";
import "./App.css";
import { ARTICLES } from "./constants/articles";
import SearchBox from "./components/SearchBox";
import Article from "./components/Article";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }, []);

  const filteredArticles = ARTICLES.filter((article) => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasSearch = searchTerm.trim().length > 0;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ color: '#000' }}>Search Articles</h1>
      <SearchBox onSearch={setSearchTerm} />
      
      {hasSearch && (
        <>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}.
          </p>
          <div>
            {filteredArticles.map((article) => (
              <Article key={article.id} article={article} searchTerm={searchTerm} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default App;
