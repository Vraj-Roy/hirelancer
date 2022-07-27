import  { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import  Image  from 'next/image';

const Slug = () => {
  const router = useRouter();
  const { Slug } = router.query;
  const [loader, setLoader] = useState(true);
const [blog, setBlog] = useState({})
  const fetchPost = async () => {
    setLoader(true);
    let res = await fetch(
      `${process.env.URL_PATH}/api/blogs/getSpecificBlog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: Slug }),
      }
    );
    let response = await res.json();
    console.log(response);
    setBlog(response)
    setLoader(false); 
  };

  useEffect(() => {
    fetchPost();
  }, [Slug]);
  return (
    <>
      <div className="mx-auto text-center font-bold text-4xl">{blog.title}</div>
      {blog.img && <div className=" my-5   mx-auto w-fit px-5 py-2"><Image width={600} height={400}    objectFit="contain"  alt={blog.title} src={blog.img}/></div>}
      <div className="mx-auto   text-justify  md:w-[90vw] w-full p-5 font-semibold text-xl">{blog.description}</div>
    </>
  );
};

export default Slug;
