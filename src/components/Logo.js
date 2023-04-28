import React from "react";

function Logo() {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMG sont accesibles dans public */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
}

export default Logo;
