interface Props {
  id?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  hierarchy?: 1 | 2 | 3 | 4;
  className?: string;
  onClick?: () => void;
  squared?: boolean;
  disabled?: boolean;
}

const MyButton = ({
  id,
  children,
  size,
  hierarchy,
  className,
  onClick,
  squared = false,
  disabled = false,
}: Props) => {
  return (
    <button
      id={id}
      className={`
          btn
          ${className ? className : ""}
          ${
            size === "small" ? "btn-sm" : size === "large" ? "btn-lg" : "btn-md"
          }
          ${
            disabled
              ? "btn-disabled"
              : hierarchy === 4
              ? "btn-4"
              : hierarchy === 3
              ? "btn-3"
              : hierarchy === 2
              ? "btn-2"
              : "btn-1"
          }
          ${squared ? "btn-square" : ""}
          `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
