import React from "react";

export interface ChipProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}
const Chip: React.FC<ChipProps> = ({
  children,
  backgroundColor = "#f0f0f0",
  textColor = "#222",
  icon,
  iconPosition = "left",
  onClick,
  style,
  className,
  size = "md",
  disabled = false,
}) => {
  const sizes = {
    sm: { padding: "2px 8px", fontSize: "12px", gap: 6, borderRadius: 12 },
    md: { padding: "6px 10px", fontSize: "14px", gap: 8, borderRadius: 14 },
    lg: { padding: "8px 12px", fontSize: "16px", gap: 10, borderRadius: 16 },
  };
  const s = sizes[size];

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    borderRadius: s.borderRadius,
    background: backgroundColor,
    color: textColor,
    lineHeight: 1,
    cursor: onClick && !disabled ? "pointer" : "default",
    userSelect: "none",
    border: "none",
    outline: "none",
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const content = (
    <>
      {icon && iconPosition === "left" ? <span>{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? <span>{icon}</span> : null}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={className}
        onClick={disabled ? undefined : onClick}
        style={baseStyle}
        aria-pressed={false}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  return (
    <span
      className={className}
      style={baseStyle}
      role="status"
      aria-disabled={disabled}
    >
      {content}
    </span>
  );
};

export default Chip;
