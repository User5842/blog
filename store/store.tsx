import { createContext, FunctionComponent, useState } from "react";
import { IPost } from "../interfaces/IPost";

export enum ColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export type BlogContextType = {
  categories: string[];
  colorMode: ColorMode;
  page: number;
  posts: IPost[];
  setCategories: (_: string[]) => void;
  setColorMode: (_: ColorMode) => void;
  setPage: () => void;
  setPosts: (_: IPost[]) => void;
};

const BlogContext = createContext<BlogContextType>({
  categories: [],
  colorMode: ColorMode.LIGHT,
  page: 1,
  posts: [],
  setCategories: (_: string[]) => {},
  setColorMode: (_: ColorMode) => {},
  setPage: () => {},
  setPosts: (_: IPost[]) => {},
});

export const BlogContextProvider: FunctionComponent = (props) => {
  const [categories, setCategories] = useState<string[]>([]);

  const [colorMode, setColorMode] = useState(ColorMode.LIGHT);

  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState<IPost[]>([]);

  const categoriesHandler = (newCategories: string[]) =>
    setCategories((previousCategories) => [
      ...previousCategories,
      ...newCategories,
    ]);

  const colorModeHandler = (newColorMode: ColorMode) =>
    setColorMode(newColorMode);

  const pageHandler = () => setPage((previousPage) => previousPage + 1);

  const postsHandler = (newPosts: IPost[]) =>
    setPosts((previousPosts) => [...previousPosts, ...newPosts]);

  return (
    <BlogContext.Provider
      value={{
        categories,
        colorMode,
        page,
        posts,
        setCategories: categoriesHandler,
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
