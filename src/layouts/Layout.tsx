import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout: React.FC<{
  children: React.ReactElement;
  title?: string;
  showHeader?: boolean;
}> = ({ children, title, showHeader = true }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="layout">
        {showHeader && <Header />}
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
