import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M20.61 18.4l-4.5-4.5c-.1-.1-.1-.1-.2-.1A7 7 0 0 0 17 10a7 7 0 1 0-7 7 7 7 0 0 0 3.8-1.1l.1.2 4.5 4.5a1.71 1.71 0 0 0 2.2 0 1.8 1.8 0 0 0 .01-2.2zm-7.12-6.34L12 13.51l-2-2.05-2.06 2.05-1.45-1.45L8.54 10 6.49 8l1.45-1.49L10 8.56l2-2.05L13.49 8l-2.05 2z" /></svg>;
  }

}