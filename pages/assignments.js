import Assignment from "../components/Assignment";
import { useEffect, useState } from "react";
import { AssignMentLoader } from "../content loaders/Loader";
import Router, { useRouter } from "next/router";
const Assignments = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeZone, settimeZone] = useState("");

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
           <div className="md:w-fit w-full p-5 md:p-0  gap-x-2 flex items-center flex-nowrap mx-auto mt-10 ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery} 
          type="text"
          className=" border-2 rounded-md h-12 border-orange-500 outline-orange-600 w-full px-3 md:w-[800px]   text-lg"
        />{" "}
        <button
          onClick={() => Router.push(`/assignments/tags/${searchQuery}`)}
          className="min-w-fit rounded-md     md:w-[100px] border-2 border-orange-500  h-12"
        >
          search
        </button>
      </div>
      {loader &&
        [1, 2, 3].map((l) => (
          <AssignMentLoader
            key={l}
            className=" px-3 py-5 m-5 md:mx-auto  md:w-[900px] md:p-10 border-2 rounded-md"
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
              timeZone={d.timeZone}
            />
          );
        })}
    </>
  );
};
export default Assignments;
