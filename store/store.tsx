import { createContext, FunctionComponent, useState } from "react";
import { IPost } from "../interfaces/IPost";

export enum ColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export type BlogContextType = {
  colorMode: ColorMode;
  page: number;
  posts: IPost[];
  setColorMode: (_: ColorMode) => void;
  setPage: () => void;
  setPosts: (_: IPost[]) => void;
};

const BlogContext = createContext<BlogContextType>({
  colorMode: ColorMode.LIGHT,
  page: 1,
  posts: [],
  setColorMode: (_: ColorMode) => {},
  setPage: () => {},
  setPosts: (_: IPost[]) => {},
});

export const BlogContextProvider: FunctionComponent = (props) => {
  const [colorMode, setColorMode] = useState(ColorMode.LIGHT);

  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState<IPost[]>([]);

  const colorModeHandler = (newColorMode: ColorMode) =>
    setColorMode(newColorMode);

  const pageHandler = () => setPage((previousPage) => previousPage + 1);

  const postsHandler = (newPosts: IPost[]) =>
    setPosts((previousPosts) => [...previousPosts, ...newPosts]);

  return (
    <BlogContext.Provider
      value={{
        colorMode,
        page,
        posts,
        setColorMode: colorModeHandler,
        setPage: pageHandler,
        setPosts: postsHandler,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
