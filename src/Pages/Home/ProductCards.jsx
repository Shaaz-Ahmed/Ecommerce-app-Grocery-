import React from 'react';
import { Container, Box } from '@mui/material';
import Star from '@mui/icons-material/Star'; // Import the star icon
import ShoppingCart from '@mui/icons-material/ShoppingCart'; // Import the shopping cart icon
import Slider from 'react-slick'; // Import the slider component
import 'slick-carousel/slick/slick.css'; // Import slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS

const products = [
    {
        id: 1,
        name: 'Werther Original caramel Hard candies',
        price: 29.99,
        rating: 4,
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f78fba1e-70a5-4727-a547-131716e05f5f.jpg?ts=1718282777',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        rating: 5,
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_473218.jpg?ts=1710347242',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 39.99,
        rating: 5,
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_473218.jpg?ts=1710347242',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 39.99,
        rating: 5,
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_473218.jpg?ts=1710347242',
    },
    {
        id: 5,
        name: 'Product 5',
        price: 39.99,
        rating: 5,
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_473218.jpg?ts=1710347242',
    },
];

const ProductCards = () => {
    // Slider settings
    const settings = {
        dots: true, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at once
        slidesToScroll: 1,
        arrows: true, // Enable arrows for navigation
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 card on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container>
            <Slider {...settings}>
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '12px', // Reduced padding
                            height: '350px', // Adjusted height for smaller cards
                            textAlign: 'left', // Align text to the left
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column', // Allow flex layout
                            justifyContent: 'space-between', // Space out children
                            minWidth: '200px', // Minimum width for cards
                            position: 'relative', // Needed for absolute positioning of the icon
                        }}
                    >
                        {/* Add to Cart Icon */}
                        <ShoppingCart
                            sx={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                color: '#233a95', // Updated color to #233a95
                                cursor: 'pointer',
                                backgroundColor: 'white', // Optional: to ensure visibility of shadow
                                borderRadius: '50%', // Optional: make it circular
                                padding: '4px', // Optional: some padding for better click area
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Shadow effect
                            }}
                            onClick={() => console.log(`Added ${product.name} to cart`)} // Add your click handler here
                        />
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                marginBottom: '8px', // Margin below the image
                            }}
                        />
                        <h6 style={{ margin: '0px 0' }}>{product.name}</h6>
                        {/* Render stars based on the rating in the next line */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {[...Array(product.rating)].map((_, index) => (
                                <Star key={index} sx={{ color: 'yellow', fontSize: '16px', marginLeft: '4px' }} />
                            ))}
                        </div>
                        <p style={{ margin: '8px 0' }}>Price:{product.price}</p>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
};

export default ProductCards;
