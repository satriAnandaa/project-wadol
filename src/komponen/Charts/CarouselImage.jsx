import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './carousel.css';

const ImageCarousel = () => {
  const images = [
    // 'src/assets/dol1.jpg',
    'src/assets/dol2.jpg',
    'src/assets/dol3.jpg',
    'src/assets/dol4.jpg',
    'src/assets/dol5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const tableData = [
    {
      key: '1',
      packageName: 'Tour Package A',
      rating: 4.5,
    },
    {
      key: '2',
      packageName: 'Tour Package B',
      rating: 4.0,
    },
  ];

  const columns = [
    {
      title: 'Package Name',
      dataIndex: 'packageName',
      key: 'packageName',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

  return (
    <div className="rounded-xl bg-white p-5 dark:bg-slate-600 dark:text-slate-300 xl:w-[400px] shadow-lg">
      <div className="carousel-container">
        <button onClick={prevSlide} className="prev-btn">
          <LeftOutlined />
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <button onClick={nextSlide} className="next-btn">
          <RightOutlined />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      <div className="mt-5">
        <Table
          dataSource={tableData}
          columns={columns}
          pagination={{ pageSize: 2 }}
          showHeader={true}
          size="small"
          rowClassName="dark:bg-slate-700 dark:text-white"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
