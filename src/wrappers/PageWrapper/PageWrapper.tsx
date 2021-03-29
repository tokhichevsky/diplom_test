import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CSS from "./PageWrapper.module.scss";

const PageWrapper = (props: React.ComponentProps<any>) => {
  return (
    <div className={CSS.PageWrapper}>
      <Header/>
      <main className={CSS.Page}>
        {props.children || " a"}
      </main>
      <Footer className={CSS.PageWrapper__footer}/>
    </div>
  );
};

export default PageWrapper;
