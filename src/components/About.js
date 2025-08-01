import React from "react";
import Links from "./Links";

export default function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}