import React from "react";

import "./style.css";

const LinkWebsites = props => {
  const linkMarkup = props.options.map(link => (
    <li key={link.id} className="link-website">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-website-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkWebsites;
