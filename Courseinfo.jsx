import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseData from "./Course.json"; // Import the JSON file directly

function CourseInfo()
 {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  // Fetch course details
  useEffect(() => {
    console.log("Fetching data...");
    const match = CourseData.find((course) => course.id === parseInt(id, 10));
    if (match) {
      setCourse(match);
    } else {
      console.error("Course not found");
    }
  }, [id]);

  // Image path with fallback
  const imagePath = course.image
    ? `/Assets/${course.image}`
    : `/Assets/Logo.webp`;

  return (
    <div className="container">
      <div className="row mt-5">
        {/* Course Image */}
        <div className="col-sm-12 col-lg-3">
          <div className="card border-none">
            <img
              className="mx-auto d-block img-fluid"
              src={imagePath}
              alt={`${course.courseName || "Course"} image`}
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
        </div>

        {/* Course Info */}
        <div className="col-sm-12 col-lg-9">
          <div className="card" style={{ border: "1px solid #ccc", borderRadius: "3%" }}>
            <div className="card-body">
              <h4>COURSE INFORMATION</h4>
              <p>{course.courseInfo || "No course information available."}</p>

              <h4>FACILITIES AT OUR INSTITUTE</h4>
              <p>{course.facilities || "No facilities available."}</p>

            </div>
          </div>
        </div>
      </div>
      </div>


  );
}

export default CourseInfo;
