import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkDetails = links.map(link=><a key={link} href={"#"+link}>{link}</a>)
  return <nav>{linkDetails}</nav>;
}

export default NavBar;
