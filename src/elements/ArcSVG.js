/* Arco baseado conforme descrito nos sites:
  https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
  https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
  https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
*/
import React from 'react'
import '../css/ArcSVG.css';

function ArcSVG({ radius }) {

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle){
    
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    const d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    
    return d;
  }

  // gradiente baseado em: https://codepen.io/plava/pen/BjavpN
  return (
    <svg className="countdown-svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00bc9b" />
          <stop offset="33%" stopColor="#5eaefd" />
          <stop offset="66%" stopColor="#c77dff" />
          <stop offset="100%" stopColor="#ff7900" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#gradient)"
        strokewith="4"
        strokeLinecap="round"
        strokeWidth="4"
        d={ describeArc(50, 50, 48, 0, 360 - radius)}
      />
    </svg>
  )
}

export default ArcSVG;
