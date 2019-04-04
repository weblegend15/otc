import React from 'react';
import Rating from 'react-rating';
import cx from 'classnames';
import fullStarIcon from '../../assets/icons/starYellow.svg';
import emptyStarIcon from '../../assets/icons/starGrey.svg';

const EmptyStar = () => <img src={emptyStarIcon} alt="star" className="star" />;

const FullStar = () => <img src={fullStarIcon} alt="star" className="star" />;

export default ({ className, ...rest }) => (
  <Rating
    className={cx(
      'rating d-flex flex-row align-items-center justify-content-center',
      { [className]: className },
    )}
    placeholderSymbol={<EmptyStar />}
    emptySymbol={<EmptyStar />}
    fullSymbol={<FullStar />}
    {...rest}
  />
);
