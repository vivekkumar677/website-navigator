import React from 'react';

const NavButtons = ({ currentIndex, total, onPrev, onNext }) => {
  return (
    <div className="nav-buttons">
      <button onClick={onPrev} disabled={currentIndex === 0}>
        ⬅ Previous
      </button>

      <span>
        {total > 0 && `Showing ${currentIndex + 1} of ${total}`}
      </span>

      <button onClick={onNext} disabled={currentIndex === total - 1}>
        Next ➡
      </button>
    </div>
  );
};

export default NavButtons;