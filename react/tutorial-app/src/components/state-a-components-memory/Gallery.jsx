import { useState } from "react";
import { sculptureList } from "./Data";

const Gallery = () => {
  // state変数、セッタ関数を分割代入している
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const maxIndex = sculptureList.length;

  let hasPrevious = 0 < index
  let hasNext = index + 1  < maxIndex

  const handlePreviousClick = () => {
    const previousIndex = hasPrevious ? index - 1 : maxIndex - 1;
    setIndex(previousIndex);
  }
  const handleNextClick = () => {
    const nextIndex = hasNext ? index + 1 : 0;
    setIndex(nextIndex);
  }
  const handleMoreClick = () => {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handlePreviousClick} disabled={!hasPrevious}>
      previous
    </button>
    <button onClick={handleNextClick} disabled={!hasNext}>
      Next
    </button>
    <h2><i>{sculpture.name} by {sculpture.artist}</i></h2>
    <h3>
      ({index + 1} of {sculptureList.length})
    </h3>
    <button onClick={handleMoreClick}>
      {showMore ? 'Hide' : 'Show'} details
    </button>
    <img src={sculpture.url} alt={sculpture.alt} />
    <p>{showMore && sculpture.description}</p>
    </>
  )
}

export default Gallery;