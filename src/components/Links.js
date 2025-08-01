import React from "react";

export default function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
      )}
    </div>
  );
}