import React from 'react';
import { useParams } from 'react-router-dom';

const teacherData = {
    Teacher1: {
    image: "/assets/teacher1.jpg",
    name: "John Doe",
    description: "Expert in Java Fullstack Development.",
    rating: "4.5",
    qualification: "M.Tech"
  },
  Teacher2: {
    image: "/assets/teacher1.jpg",
    name: "Jane Smith",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher3: {
    image: "/assets/teacher1.jpg",
    name: "Teacher3",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher4: {
    image: "/assets/teacher1.jpg",
    name: "Teacher4",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher5: {
    image: "/assets/teacher1.jpg",
    name: "Teacher5",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher6: {
    image: "/assets/teacher1.jpg",
    name: "Teacher6",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher7: {
    image: "/assets/teacher1.jpg",
    name: "Teacher7",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher8: {
    image: "/assets/teacher1.jpg",
    name: "Teacher8",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher9: {
    image: "/assets/teacher1.jpg",
    name: "Teacher9",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher10: {
    image: "/assets/teacher1.jpg",
    name: "Teacher10",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher11: {
    image: "/assets/teacher1.jpg",
    name: "Teacher11",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  },
  Teacher12: {
    image: "/assets/teacher1.jpg",
    name: "Teacher12",
    description: "Specialist in Data Science and Machine Learning.",
    rating: "4.8",
    qualification: "Ph.D."
  }
};

function TeacherInfo() {
  const { teacherId } = useParams(); // Get teacher ID from URL params
  const teacher = teacherData[teacherId]; // Fetch the teacher's data

  if (!teacher) {
    return <h2>Teacher not found</h2>; // Handle invalid teacher ID
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="img-fluid w-100 p-3"
              style={{ height: "50vh", borderRadius: "10px" }}
            />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div class="card text-start p-2 m-3">
                <div className="card-body">
                <h2 className="card-title">{teacher.name}</h2>
                <p className="card-text">{teacher.description}</p>
                <h5>Rating: {teacher.rating}</h5>
                <h5>Qualification: {teacher.qualification}</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherInfo;