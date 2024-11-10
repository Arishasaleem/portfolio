// Define specific types or interfaces for your props and elements

interface CardProps {
  translateZ?: number; // adjust as needed
  className?: string;
  children: React.ReactNode;
}

export const CardContainer: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
