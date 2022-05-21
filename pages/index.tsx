import type { NextPage } from "next";
import { useEffect } from "react";

import Layout from "../components/Layout/Layout";
import { IPageProps } from "../interfaces/IPageProps";
import { BlogContextProvider } from "../store/store";

const Home: NextPage<IPageProps> = () => {
  useEffect(() => {
    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  return (
    <BlogContextProvider>
      <Layout />
    </BlogContextProvider>
  );
};

export default Home;
