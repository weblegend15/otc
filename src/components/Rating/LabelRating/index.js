import React from 'react';
import Rating from '../Rating';

export default ({ avgRating, ratingCount, className, ...rest }) => {
  return (
    <div className={className}>
      <Rating initialRating={avgRating} readonly {...rest} />
      {avgRating !== undefined && (
        <p className="mt-2 font-weight-semibold p-sm">
          {avgRating}/{ratingCount}
        </p>
      )}
    </div>
  );
};
