import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M2.5 10.5H9v2.2c0 1 1 1.6 1.7 1.1l5.7-3.8c.7-.5.7-1.6 0-2.1l-5.7-3.7C10 3.7 9 4.3 9 5.3v2.2H2.5C1.7 7.5 1 8.2 1 9s.7 1.5 1.5 1.5z" /></svg>;
  }

}