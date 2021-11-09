import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper">
          <div className="container">{this.props.children}</div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
