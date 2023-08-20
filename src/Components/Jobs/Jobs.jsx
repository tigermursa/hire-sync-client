import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter, FaBriefcase } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  const [jobData, setJobData] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  console.log(jobData);
  useEffect(() => {
    // Fetch job data from the jobinfo.json file
    const fetchJobData = async () => {
      try {
        const response = await axios.get("https://hire-sync-server.vercel.app/jobs");
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, []);

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1); // Reset the current page when the filter changes
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
    setCurrentPage(1); // Reset the current page when the filter changes
  };

  const filteredJobs = jobData.filter((job) => {
    const isTypeMatch =
      filterType === "" ||
      job.jobType.toLowerCase() === filterType.toLowerCase();
    const isCategoryMatch =
      filterCategory === "" ||
      job.jobCategory.toLowerCase() === filterCategory.toLowerCase();
    return isTypeMatch && isCategoryMatch;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const num = filteredJobs.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-300 to-gray-200 pt-10 pb-10">
      <div className="p-4 md:grid md:grid-cols-2 gap-4 xl:max-w-screen-lg xl:mx-auto">
        <div className="mb-4">
          <h3 className="text-lg font-bold flex justify-center items-center gap-2 mb-5">
            <FaFilter /> Filter Jobs
          </h3>
          <div>
            <label htmlFor="filterType" className="block font-semibold mb-1">
              By Type:
            </label>
            <select
              id="filterType"
              className="input input-bordered w-56"
              value={filterType}
              onChange={handleFilterTypeChange}
            >
              <option value="">All</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
              <option value="hybrid">Hybrid</option>
              <option value="intern">Intern</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="filterCategory"
              className="block font-semibold mb-1"
            >
              By Category:
            </label>
            <select
              id="filterCategory"
              className="input input-bordered w-56 "
              value={filterCategory}
              onChange={handleFilterCategoryChange}
            >
              <option value="">All</option>
              <option value="developer">Developer</option>
              <option value="marketing">Marketing</option>
              <option value="security">Security</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        </div>
        <div>
          {num === 0 ? (
            <div className="flex items-center justify-center h-60vh">
              <h3 className="text-xl font-bold text-blue-900">
                No job available now
              </h3>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2">
                <FaBriefcase /> Available jobs: {num}
              </h3>
              <div className="divider"></div>
              {currentJobs.map((job, index) => (
                <div key={index} className="rounded p-4 mb-4">
                  <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                      <h2 className="card-title">
                        <h2 className="text-xl font-bold ">{job.jobTitle}</h2>
                        <div className="badge badge-secondary">
                          <p
                            className="text-white"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {job.jobType}
                          </p>
                        </div>
                      </h2>
                      <p className="text-gray-500 text-start font-bold">
                        Company: {job.companyName}
                      </p>
                      <p className="text-gray-500 text-start font-semibold">
                        Salary: {job.salary}
                      </p>
                      <p className="text-gray-500 text-start font-semibold">
                        Experience: {job.experience}
                      </p>
                      <div className="card-actions justify-end">
                        <NavLink to={`details/${job._id}`}>
                          <div className="btn btn-outline btn-info  font-semibold">
                            View Details
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <div className="pagination">
                  {Array.from(
                    { length: Math.ceil(filteredJobs.length / jobsPerPage) },
                    (_, i) => (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`pagination-button-class border p-3 font-bold border-blue-500 text-white bg-blue-600 bg-opacity-50 rounded-xl ${
                          currentPage === i + 1 ? "text-blue-950" : "text-blue-300"
                        }`}
                        style={{ margin: "0.25rem" }}
                      >
                        {i + 1}
                      </button>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
