import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);

    // Simulating a fetch from an API
    const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
    const data = await response.json();

    setContent(prevContent => [...prevContent, ...data]);
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber]);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
