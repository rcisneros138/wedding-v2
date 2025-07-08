interface WavyLineProps {
  color?: string
  className?: string
  width?: number
  height?: number
}

export default function WavyLine({ 
  color = '#8C3112', 
  className = '',
  width = 177,
  height = 16
}: WavyLineProps) {
  return (
    <svg 
      viewBox="0 0 177 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path 
        d="M2.51021 2.51021L5.52915 4.20002C13.4492 8.63317 22.9061 9.40129 31.4378 6.30441V6.30441C38.1983 3.85041 45.5987 3.80514 52.3888 6.17626L54.8204 7.02537C62.5524 9.72543 70.9445 9.88688 78.7747 7.4862L83.7183 5.97054C91.0323 3.72814 98.8858 3.99388 106.031 6.72557V6.72557C113.561 9.60397 121.863 9.73997 129.483 7.10973L134.538 5.3647C139.855 3.52936 145.668 3.76409 150.82 6.02212V6.02212C158.109 9.21688 166.546 8.29936 172.977 3.61254L174.49 2.51021" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round"
      />
    </svg>
  )
}