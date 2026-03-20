export interface ArticleData {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const ARTICLES: ArticleData[] = [
  {
    id: "1",
    title: "Understanding React Hooks and Functional Components",
    content: "React hooks revolutionized the way we write functional components. By using hooks like useState and useEffect, developers can seamlessly manage state and lifecycle methods without the need for class components. This paradigm shift has made React code more concise, readable, and easier to test.",
    date: "2023-10-15T08:00:00Z"
  },
  {
    id: "2",
    title: "Setting Up a Lightning Fast Development Environment with Vite",
    content: "Vite is a modern frontend build tool that provides a faster and leaner development experience for modern web projects. It leverages native ES modules in the browser to offer near-instantaneous hot module replacement, vastly improving the developer experience compared to traditional bundlers like Webpack.",
    date: "2023-11-02T14:30:00Z"
  },
  {
    id: "3",
    title: "The Importance of TypeScript in Large Scale Applications",
    content: "As web applications grow in complexity, maintaining code quality becomes challenging. TypeScript introduces static typing to JavaScript, catching errors at compile time rather than run time. This addition of types, interfaces, and generics empowers large teams to collaborate effectively while minimizing bugs and enhancing tooling support.",
    date: "2024-01-20T10:15:00Z"
  },
  {
    id: "4",
    title: "Modern CSS Techniques: Flexbox and Grid Explained",
    content: "CSS has evolved significantly, moving away from floats and complex positioning hacks. CSS Flexbox is perfect for one-dimensional layouts, allowing items to align and distribute space intelligently. Meanwhile, CSS Grid provides a robust two-dimensional layout system, enabling developers to create intricate and responsive web designs with minimal code.",
    date: "2024-02-14T09:45:00Z"
  },
  {
    id: "5",
    title: "Best Practices for Building Accessible Web Applications",
    content: "Web accessibility ensures that websites and applications are usable by everyone, including people with diverse abilities. Implementing semantic HTML, proper ARIA roles, and ensuring adequate color contrast are fundamental steps. Prioritizing accessibility not only broadens your user base but also aligns with inclusive design principles and legal standards.",
    date: "2024-03-05T16:20:00Z"
  }
];
