import React, { useEffect } from "react";
// Libraries
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// Components
import BackgroundGradient from "../components/BackgroundGradient";
import ScreenWidthWrapper from "../components/ScreenWidthWrapper";
// Pages
import PostPage from "../pages/Posts/PostPage";
import PostsListPage from "../pages/Posts/PostsListPage";
//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts());
    };
    loadPostData();
  }, [dispatch]);

  // let { path } = useRouteMatch();
  return (
    <>
      <BackgroundGradient />
      <ScreenWidthWrapper>
        <Routes>
          <Route path={":postId"} element={<PostPage />} />
          <Route path={""} element={<PostsListPage />} />
        </Routes>
        {children}
      </ScreenWidthWrapper>
    </>
  );
};

export default PostsLayout;
