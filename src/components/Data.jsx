import React, { useEffect, useState, useRef } from "react";

const Data = () => {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setNames(prev => [...prev, ...data.map(d => d.name)]);
      console.log("hum load")
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div>
      <ul>
        {names.map((n, i) => (
          <li key={i} style={{ height: "100px", borderBottom: "1px solid #eee" }}>
            {n}
          </li>
        ))}
      </ul>

      <div ref={loaderRef} style={{ height: "40px" }}>
        {isLoading ? "Loading..." : "Scroll more"}
      </div>
    </div>
  );
};

// infinite scroll 

export default Data;