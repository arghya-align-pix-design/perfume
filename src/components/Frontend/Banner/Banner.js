import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

const offers = [
  {
    id: 1,
    image: 'https://www.wildstone.in/blogs/style-guide/valentines-grooming-guide-elevate-your-style-for-the-season-of-romance', // Replace with actual image URLs
    title: 'Special Offer 1',
    text: 'Get 20% off on selected perfumes!',
  },
  {
    id: 2,
    image: 'https://www.wildstone.in/blogs/style-guide/valentines-grooming-guide-elevate-your-style-for-the-season-of-romance',
    title: 'Special Offer 2',
    text: 'Buy one, get one free on our best sellers!',
  },
  {
    id: 3,
    image: 'https://www.wildstone.in/blogs/style-guide/valentines-grooming-guide-elevate-your-style-for-the-season-of-romance',
    title: 'Special Offer 3',
    text: 'Free shipping on orders over $50!',
  },
];

function Banner() {
  return (
    <div className="banner">
      <Carousel interval={2000} controls={true} indicators={false}>
        {offers.map((offer) => (
          <Carousel.Item key={offer.id}>
            <img
              className="d-block w-100"
              src={offer.image}
              alt={offer.title}
            />
            <Carousel.Caption>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
