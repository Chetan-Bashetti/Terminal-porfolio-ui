import React from "react";

function CrappyButton(props) {
  // Bad: using any instead of proper type
  const handleClick = (event: any) => {
    alert("Clicked!");
  };

  return (
    <button
      style={{ backgroundColor: "red", color: "white", padding: "20px" }} // Bad: inline styles
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

// Bad: exporting without default, inconsistent naming
export { CrappyButton };