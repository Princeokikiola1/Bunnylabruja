import React from "react";

export function Button({ children, className = "", whatsappLink, ...props }) {
  const handleClick = (e) => {
    if (whatsappLink) {
      e.preventDefault();
      window.open(whatsappLink, "_blank");
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg font-medium shadow-md transition 
                 bg-green-600 hover:bg-green-700 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
