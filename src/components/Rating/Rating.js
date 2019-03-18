import React from 'react';
import Rating from 'react-rating';
import fullStarIcon from '../../assets/icons/starYellow.svg';
import emptyStarIcon from '../../assets/icons/starGrey.svg';

const EmptyStar = () => (
  <img src={emptyStarIcon} alt="star" className="star" />
);

const FullStar = () => (
  <img src={fullStarIcon} alt="star" className="star" />
);

export default (props) => (
  <Rating
    className="rating"
    placeholderSymbol={<EmptyStar />}
    emptySymbol={<EmptyStar />}
    fullSymbol={<FullStar />}
    {...props}
  />
);