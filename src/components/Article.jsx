import HighlightedText from './HighlightedText';

const Article = ({ article, searchTerm }) => {
  const formattedDate = new Date(article.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article style={{ border: '1px solid #ccc', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'left', color: '#333' }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#111' }}>
        <HighlightedText text={article.title} highlight={searchTerm} />
      </h2>
      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
        Published on {formattedDate}
      </div>
      <p style={{ lineHeight: '1.6', color: '#333', margin: 0 }}>
        <HighlightedText text={article.content} highlight={searchTerm} />
      </p>
    </article>
  );
};

export default Article;
