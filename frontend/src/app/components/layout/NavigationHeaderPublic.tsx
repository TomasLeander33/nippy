import { Logo } from "../ui/Logo";

type HeaderType = "freelancer" | "client";

/**
 * NavigationHeaderPublic component props
 * @typedef {Object} NavigationHeaderPublicProps
 * @property {HeaderType} variant - The variant of the header, either 'freelancer' or 'client'
 * @property {string} className - Additional CSS classes to apply to the header
 */
interface NavigationHeaderPublicProps {
  variant: HeaderType;
  className: string;
}

/**
 * NavigationHeaderPublic component
 * @param param0 - Component props
 * @returns JSX.Element
 */
export const NavigationHeaderPublic: React.FC<NavigationHeaderPublicProps> = ({
  variant = "client",
  className,
}) => {
  /**
   * Render the NavigationHeaderPublic component
   */
  return (
    <nav className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-16">
                    <div className="flex items-center">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  );
};
