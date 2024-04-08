// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';

// const StarRating = ({ number }) => {
//     const [activeStars, setActiveStars] = useState(number);

//     useEffect(() => {
//         // This effect will run whenever the activeStars state variable changes.
//         // Update the color of the stars in the stars array.
//         const stars = activeStars.map((star, index) => (
//             <FaStar
//                 key={star}
//                 color={activeStars >= index + 1 ? 'gold' : 'light'}
//                 onClick={handleClick}
//                 size={20}
//             />
//         ));
//         return () => {
//             // This cleanup function will run when the component unmounts.
//             // Clear the reference to the stars array.
//             stars = null;
//         };
//     }, []);

//     const handleClick = (index) => {
//         setActiveStars(index + 1);
//     };

//     var stars = [1, 2, 3, 4, 5];

//     return (
//         <div>
//             <FaStar
//                 key={1}
//                 color={rating >= 1 ? 'gold' : 'light'}
//                 onClick={() => setRating(1)}
//                 size={20}
//             />
//             <FaStar
//                 key={2}
//                 color={rating >= 2 ? 'gold' : 'light'}
//                 onClick={() => setRating(2)}
//                 size={20}
//             /> <FaStar
//                 key={3}
//                 color={rating >= 3 ? 'gold' : 'light'}
//                 onClick={() => setRating(3)}
//                 size={20}
//             /> <FaStar
//                 key={4}
//                 color={rating >= 4 ? 'gold' : 'light'}
//                 onClick={() => setRating(4)}
//                 size={20}
//             /> <FaStar
//                 key={5}
//                 color={rating >= 5 ? 'gold' : 'light'}
//                 onClick={() => setRating(5)}
//                 size={20}
//             />

//         </div>
//     );
// };

// export default StarRating;
