import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M6 8H2V4h4v4zm0 2H2v4h4v-4zm0 6H2v4h4v-4zM22 4H8v4h14V4zm-2 6H8v4h12v-4zm-4 6H8v4h8v-4z" /></svg>;
  }

}