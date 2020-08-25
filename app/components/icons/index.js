import React from 'react';

export const Add = () => {
  const styles = {
    cls1: {
      fill: '#39b54a'
    },
    cls2: {
      stroke: '#fff',
      strokeMiterlimit: 10,
      strokeWidth: 4
    },
    cls3: {
      fill: 'none'
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.89 56.89">
      <g>
        <g>
          <circle style={{ ...styles.cls1, ...styles.cls2 }} cx="28.45" cy="28.45" r="26.45" />
          <line style={{ ...styles.cls1, ...styles.cls2 }} x1="28.45" y1="13.9" x2="28.45" y2="42.99" />
          <line style={{ ...styles.cls1, ...styles.cls2 }} x1="13.9" y1="28.45" x2="42.99" y2="28.45" />
        </g>
      </g>
    </svg>
  )
}