import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery("muhammadrasul");
  console.log("🚀 ~ file: HomePage.tsx:6 ~ HomePage ~ data:", data)

  return <div>HomePage</div>;
};


export default HomePage;
