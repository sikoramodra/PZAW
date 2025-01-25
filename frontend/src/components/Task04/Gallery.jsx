import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';

const fetchImg = async (id) => {
  const res = await fetch(`http://localhost:3000/task04/image/${id}`);
  if (!res.ok) {
    throw new Error('Image not found');
  }
  const base64 = await res.text();
  return `data:image/png;base64,${base64}`;
};

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 1));
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 16 ? prevIndex + 1 : 16));
  };

  const imgQueries = useQueries({
    queries: Array.from({ length: 5 }, (_, i) => {
      const imgId = currentIndex + i;

      return {
        queryKey: ['img', imgId],
        queryFn: () => fetchImg(imgId),
        staleTime: Infinity,
      };
    }),
  });

  return (
    <div
      className="container d-flex align-items-center"
      style={{ width: '700px' }}
    >
      <button onClick={goLeft} className="btn btn-primary me-3">
        &lt;
      </button>
      <div className="d-flex justify-content-between flex-grow-1">
        {imgQueries.map((query, index) => {
          if (query.isLoading) {
            return (
              <div
                key={index}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                }}
              ></div>
            );
          }

          if (query.isError) {
            return (
              <div
                key={index}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: 'red',
                  borderRadius: '8px',
                }}
                title="Error loading image"
              ></div>
            );
          }

          return (
            <img
              key={index}
              src={query.data}
              alt={`Image ${currentIndex + index}`}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          );
        })}
      </div>
      <button onClick={goRight} className="btn btn-primary ms-3">
        &gt;
      </button>
    </div>
  );
}

export default Gallery;
