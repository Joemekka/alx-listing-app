export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
}
