import React from "react";

export const RenderedContent = ({ children }) => {
  console.log("children: ");
  console.log(children);
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};
