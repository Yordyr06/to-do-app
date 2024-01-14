import React from "react"
import { BulletList } from "react-content-loader"

export const MainLoader = props => {
  return (
    <BulletList 
      speed={2}
      width={1000}
      height={350}
      viewBox="0 0 400 150"
      backgroundColor="#5d5b5b"
      foregroundColor="#222222"
      {...props}
    >
      <circle cx="10" cy="20" r="8" /> 
      <rect x="25" y="15" rx="5" ry="5" width="220" height="15" /> 
      <circle cx="10" cy="50" r="8" /> 
      <rect x="25" y="45" rx="5" ry="5" width="220" height="15" /> 
      <circle cx="10" cy="80" r="8" /> 
      <rect x="25" y="75" rx="5" ry="5" width="220" height="15" /> 
      <circle cx="10" cy="110" r="8" /> 
      <rect x="25" y="105" rx="5" ry="5" width="220" height="15" />
    </BulletList>
  )
}