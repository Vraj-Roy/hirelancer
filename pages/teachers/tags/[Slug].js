import { useState, useEffect } from "react";
import { AssignMentLoader } from "../../../content loaders/Loader";
import Freelancer from "./../../../components/Freelancer";
import Router, { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { Slug } = router.query;
  const [assignment, setAssignment] = useState(null);
  const [loader, setLoader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPost = async () => {
    setLoader(true);
    let res = await fetch(
      `${process.env.URL_PATH}/api/tagsandskills/getTaggedFreelancers`,
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
    setLoader(false);
    setAssignment(response);
  };

  useEffect(() => {
    fetchPost();
  }, [Slug]);
  return (
    <>
      <div className="w-fit gap-x-2 flex items-center flex-nowrap mx-auto mt-10 ">
      
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          className=" border-2  h-12 border-orange-500 outline-orange-600 px-3 w-[80] md:w-[800px] text-lg"
        />{" "}
        <button
          onClick={() => Router.push(`/teachers/tags/${searchQuery}`)}
          className="min-w-fit w-[10vw] md:w-[100px] border-2 border-orange-500  h-12"
        >
          search
        </button> 
      </div>
      {loader &&
        [1, 2, 3].map((l) => (
          <AssignMentLoader
            key={l}
            className=" m-5 p-5 md:mx-auto w-full  md:w-[60vw] md:p-10 border-4 rounded-xl"
          />
        ))}
      {assignment && assignment.length == 0 && !loader && (
        <div className="flex h-[10vh] w-[100vw] overflow-hidden justify-center items-center">
          <div className="  text-4xl  rounded-md font-semibold text-center">
            No Assignment found with the tag {`'${Slug}'`}
          </div>
        </div>
      )}
      {assignment &&
        assignment.map((assignmentt) => {
          return (
            <Freelancer key={assignmentt._id} youDo={assignmentt.youDo} username={assignmentt.username} description={assignmentt.description}  skills={assignmentt.skills} country={assignmentt.country}
            /> 
          );
        })}
    </>
  );
};

export default Slug;
