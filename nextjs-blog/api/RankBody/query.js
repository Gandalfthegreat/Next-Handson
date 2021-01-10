import axios from "axios";

export const getPosts = async () => {
  const resData = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );

  console.log(resData.data);
  return resData.data;
};
