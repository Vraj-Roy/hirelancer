import Assignment from "../components/Assignment";
import { useEffect, useState } from "react";
import { AssignMentLoader } from "../content loaders/Loader";
import Router, { useRouter } from "next/router";
const Assignments = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAllAssignments = async () => {
      let res = await fetch(`${process.env.URL_PATH}/api/getAssignments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await res.json();
      setLoader(false);
      setData(response);
    };
    getAllAssignments();
  }, []);

  return (
    <>
      <div className="w-fit gap-x-2 flex items-center flex-nowrap mx-auto mt-10 ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          className=" border-2  h-12 border-orange-500 outline-orange-600 px-3 w-[80vw] md:max-w-[900px] text-lg"
        />{" "}
        <button
          onClick={() => Router.push(`/assignments/tags/${searchQuery}`)}
          className="min-w-fit w-[10vw] md:w-[5vw] border-2 border-orange-500  h-12"
        >
          search
        </button>
      </div>
      {loader &&
        [1, 2, 3].map((l) => (
          <AssignMentLoader
            key={l}
            className=" px-3 py-5 m-5 md:mx-auto  md:w-[60vw] md:p-10 border-2 rounded-md"
          />
        ))}
      {data &&
        data.map((d) => {
          return (
            <Assignment
              key={d._id}
              Slug={d.slug ? d.slug : ""}
              assignmentName={d.assignmentName}
              createdAt={d.postedOn}
              description={d.description}
              dueDate={d.dueDate}
              dueTime={d.dueTime}
              postedBy={d.postedBy}
              tags={d.tags}
            />
          );
        })}
    </>
  );
};
export default Assignments;
