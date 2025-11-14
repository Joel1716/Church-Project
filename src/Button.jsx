import { useState } from "react";
export default function Button({
  hover = "#1864ab",
  backgroundColor = "#0e69b6",
  padding = "1.2rem 2rem",
  borderRadius = "0.8rem",
  border = "none",
  fontSize = "1.8rem",
  color = "#f4f4f4",
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? hover : backgroundColor,
    padding: padding,
    border: border,
    fontSize: fontSize,
    borderRadius: borderRadius,
    cursor: "pointer",
  };
  const textStyle = {
    color: color,
  };
  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" style={textStyle}>
        {children}
      </a>
    </button>
  );
}
