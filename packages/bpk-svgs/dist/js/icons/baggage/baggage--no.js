import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M20 8h-4c0-2.2-1.8-4-4-4S8 5.8 8 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-8-2c1.103 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3.855 10.451a.496.496 0 0 1 0 .702l-.702.702a.496.496 0 0 1-.702 0L12 15.404l-2.451 2.451a.496.496 0 0 1-.702 0l-.702-.702a.496.496 0 0 1 0-.702L10.596 14l-2.451-2.451a.496.496 0 0 1 0-.702l.702-.702a.496.496 0 0 1 .702 0L12 12.596l2.451-2.451a.496.496 0 0 1 .702 0l.702.702a.496.496 0 0 1 0 .702L13.404 14l2.451 2.451z" /></svg>;
  }

}