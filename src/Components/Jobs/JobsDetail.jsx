import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter, FaBriefcase } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Jobs = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`https://hire-sync-server.vercel.app/jobs/${id}`);
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [id]);

  const handleApply = () => {
    // Perform the checkbox validation
    const checkbox1 = document.getElementById("checkbox1").checked;
    const checkbox2 = document.getElementById("checkbox2").checked;
    const checkbox3 = document.getElementById("checkbox3").checked;

    if (checkbox1 && checkbox2 && checkbox3) {
      // Enable the apply button
      window.my_modal_5.close();
      // Perform additional actions or submit the form
      setShowToast(true); // Show success toast
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your job application has been submitted successfully.",
      });
    } else {
      // Display an error message or take appropriate action
      setShowToast(false); // Hide success toast
      console.log("Please check all the boxes!");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please check all the boxes first.",
      });
    }
  };

  return (
    <div className="pt-40 pb-20 flex justify-center">
      <div className="card bg-base-100 shadow-2xl border-2 border-black p-4 m-4 flex justify-center items-center md:w-6/12 w-full">
        <div className="card-body">
          <h2 className="card-title">
            <h2 className="text-xl font-bold ">{jobData.jobTitle}</h2>
            <div className="badge badge-secondary">
              <p className="text-white" style={{ whiteSpace: "nowrap" }}>
                {jobData.jobType}
              </p>
            </div>
          </h2>
          <p className="text-gray-500 text-start font-bold">
            Company: {jobData.companyName}
          </p>
          <p className="text-gray-500 text-start font-semibold">
            About Company: {jobData.companyAbout}
          </p>
          <p className="text-green-500 text-start font-semibold">
            Salary: {jobData.salary}
          </p>
          <p className="text-gray-500 text-start font-semibold">
            Job Category: {jobData.jobCategory}
          </p>
          <p className="text-gray-500 text-start font-semibold">
            Job Description: {jobData.jobDescription}
          </p>
          <p className="text-gray-500 text-start font-semibold">
            Experience up to : {jobData.experience}
          </p>
          <p className="text-gray-500 text-start font-semibold">
            Skill Requirements:
          </p>
          <ul className="text-start">
            {jobData.skillRequirements &&
              jobData.skillRequirements.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
          </ul>
          <div className="card-actions justify-start mt-9">
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn btn-outline btn-info font-semibold"
              onClick={() => window.my_modal_5.showModal()}
            >
              Apply job
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4 text-start font-semibold">
                  Before submitting your application, please review the following requirements:
                </p>
                <div className="modal-action flex flex-col items-start">
                  {/* Add the checkbox with the required information */}
                  <div className="form-control ">
                    <label
                      htmlFor="checkbox1"
                      className="cursor-pointer label "
                    >
                      <span className="label-text flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkbox1"
                        />
                        I am free to join anytime.
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label htmlFor="checkbox2" className="cursor-pointer label">
                      <span className="label-text flex items-center gap-2 ">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkbox2"
                        />
                        I have all the skills.
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label htmlFor="checkbox3" className="cursor-pointer label">
                      <span className="label-text flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkbox3"
                        />
                        I am over 20 years old.
                      </span>
                    </label>
                  </div>

                  {/* Add the apply button and apply button validation */}
                  <button
                    className="btn btn-outline btn-info font-semibold mt-4"
                    onClick={handleApply}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </dialog>
          </div>
          {showToast && (
            <div className="toast toast-top toast-center pt-20">
              <div className="alert alert-success">
                <span>Your job application has been submitted successfully.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
