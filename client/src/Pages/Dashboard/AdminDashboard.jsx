import React, { useEffect } from "react";

import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { getAllCourses, deleteCourse } from "../../Redux/Slices/CourseSlice";

import { getStatsData } from "../../Redux/Slices/StatSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUsersCount } = useSelector((state) => state.stat);

  const myCourses = useSelector((state) => state.course.coursesData);

  async function onCourseDelete(id) {
    if (window.confirm("Are you sure you want to delete the course ? ")) {
      const res = await dispatch(deleteCourse(id));
      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }

  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
      await dispatch(getStatsData());
    })();
  }, []);

  return (
    <Layout hideFooter={true}>
      <section className="py-5 lg:py-10 flex flex-col gap-7">
        <h1 className="text-center text-3xl text-blue-500 font-inter font-semibold">
          Admin{" "}
          <span className="text-violet-500 font-nunito-sans">Dashboard</span>
        </h1>
        <div className="flex flex-col gap-14">
          {/* creating the records card and chart for sales and user details */}
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-7 m-auto lg:mx-10 mx-2">
           

              {/* card for user data */}
              <div className="grid grid-cols-2 gap-5 w-full">
                {/* Registered user */}
                <div className="flex  items-center relative h-32 justify-between p-5 gap-5 rounded-md shadow-md">
                  <div className="flex flex-col items-center mt-3 justify-center">
                    <p className="font-semibold text-gray-700 dark:text-white md:static absolute top-3 left-3">
                      Registered Users
                    </p>
                    <h3 className="md:text-4xl text-xl font-inter font-bold">
                      {allUsersCount}
                    </h3>
                  </div>
                  <FaUsers className="text-blue-500 text-5xl" />
                </div>

              </div>
            

          </div>

          <div className=" w-[100%] self-center flex flex-col   justify-center gap-10 mb-10">
            <div className="flex w-full items-center justify-between md:px-[30px] px-2">
              <h1 className="text-center font-inter md:text-3xl text-xl text-gray-600 dark:text-slate-50 font-semibold">
                Courses overview
              </h1>

              <button
                onClick={() => {
                  navigate("/course/create");
                }}
                className="w-fit bg-blue-500  transition-all ease-in-out duration-300 rounded py-2 px-4 font-[600] font-inter text-lg text-white cursor-pointer"
              >
                Create new course
              </button>
            </div>

            <div className="w-[90%] overflow-x-scroll mx-auto">
              <table className="table">
                <thead className="text-gray-900 dark:text-slate-300 font-lato">
                  <tr>
                    <th>S No</th>
                    <th>Course Title</th>
                    <th>Course Category</th>
                    <th>Instructor</th>
                    <th>Total Lectures</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="text-black font-[500] text-sm dark:text-slate-300 font-open-sans">
                  {myCourses?.map((course, idx) => {
                    return (
                      <tr key={course._id}>
                        <td>{idx + 1}</td>
                        <td>
                          <textarea
                            readOnly
                            value={course?.title}
                            className="w-40 h-auto bg-transparent resize-none"
                          ></textarea>
                        </td>
                        <td>{course?.category}</td>
                        <td>{course?.createdBy}</td>
                        <td>{course?.numberOfLectures}</td>
                        <td className="max-w-28  whitespace-nowrap">
                          <textarea
                            value={course?.description}
                            readOnly
                            className="w-80 h-auto bg-transparent  line-clamp-2 resize-none"
                          ></textarea>
                        </td>
                        <td className="flex items-center gap-4">
                          <button
                            className="bg-green-500 text-white font-inter transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-[500]"
                            onClick={() =>
                              navigate("/course/displaylectures", {
                                state: { ...course },
                              })
                            }
                          >
                            <BsCollectionPlayFill />
                          </button>
                          <button
                            className="bg-red-500 text-white  transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-inter font-[500]"
                            onClick={() => onCourseDelete(course?._id)}
                          >
                            <BsTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
