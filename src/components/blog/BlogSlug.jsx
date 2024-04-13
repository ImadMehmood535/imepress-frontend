import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import Loader from "../general/Loader";

const BlogSlug = ({ slug }) => {
  
  const [blog, setBlog] = useState(null);
  const [fetching, setFetching] = useState(true);

  const getData = async () => {
    try {
      const response = await API.getSingleBlog(slug);
      setBlog(response?.data?.data);
      setFetching(false);
    } catch (error) {
      errorToast(error?.response?.data?.message, "Can not fetch blog");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return fetching ? (
    <Loader />
  ) : (
    <div className="myContainer py-12 flex flex-col gap-8">
      <img
        src={blog?.imageUrl}
        width={2000}
        height={1000}
        alt={blog?.name}
        className="w-full rounded-md"
      />
      <Editor
        value={blog?.description}
        readOnly
        style={{ height: "100%" }}
        headerTemplate={<></>}
      />
    </div>
  );
};

export default BlogSlug;
