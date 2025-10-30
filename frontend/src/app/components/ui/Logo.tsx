import { IMAGES } from "@/app/config/constants";
import React from "react";

/**
 * Logo component props
 * @typedef {Object} LogoProps
 * @property {string} [colorClass] - CSS class for the logo color
 * @property {string} [sizeClass] - CSS class for the logo size
 * @property {boolean} [hoverEffect] - Whether to apply hover effect
 * @property {Function} [onClick] - Click event handler
 * @property {string} [className] - Additional CSS classes to apply to the logo
 */
interface LogoProps {
  colorClass?: string;
  sizeClass?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  colorClass = "text-blue-600 dark:text-blue-400",
  sizeClass = "h-12 w-12",
  hoverEffect = true,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        inline-block
        ${sizeClass}
        ${hoverEffect && "hover:scale-105 hover:opacity-90 cursor-pointer"}
        ${className}
      `}
    >
      <img
        src={IMAGES.logo}
        alt="Logo"
        className={`object-contain select-none w-full h-full ${colorClass}`}
      />
    </div>
  );
};
