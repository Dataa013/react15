import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore, setReadMore] = React.useState(false);
  const [remove, setRemove] = React.useState()


  return <article className='single-tour'>
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(prevMore => !prevMore)}>{readMore ? "show less" : "read more"}</button>
        </p>
        <button onClick={() => removeTour(id)} className='delete-btn'>not interested</button>
      </footer>
  </article>
};

export default Tour;
