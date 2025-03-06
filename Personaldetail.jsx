import React, { useState } from 'react';
import { RiImageAddLine } from "react-icons/ri";

function PersonalDetails() {
  const [user, setUser] = useState({
    fullName: 'Full Name',
    userName: 'User Id',
    phone: '1234567890',
    email: 'email@gmail.com',
    address: '1234 Elm Street, Some City, Country',
    bio: 'A passionate software developer with a love for coding and new technologies.',
    profilePic: './assets/profile.jpeg' // Initial profile picture
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit form visibility
  const [editedUser, setEditedUser] = useState(user); // State to hold edited user info
  const [imagePreview, setImagePreview] = useState(user.profilePic); // For image preview

  // Function to handle profile picture update
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Show image preview before saving
        setUser(prevState => ({
          ...prevState,
          profilePic: reader.result // Set the new profile picture (base64 encoded image)
        }));
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Function to handle form submission and save the changes
  const handleSave = () => {
    setUser(editedUser); // Update the user state with the edited info
    setIsEditing(false);  // Close the edit form
  };

  // Function to handle input change in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  // Basic validation for form submission
  const isFormValid = () => {
    return (
      editedUser.fullName &&
      editedUser.userName &&
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(editedUser.email) &&
      /^[0-9]{10}$/.test(editedUser.phone)
    );
  };

  return (
    <div className="container">
      <div className="row">
        {/* Profile Section */}
        <div className="col-sm-12 col-lg-5 mt-5">
          <div className="card text-start">
            <center>
              <div style={{ position: 'relative' }}>
                <img
                  className="card-img-top mt-5"
                  src={imagePreview}  // Dynamic image source
                  alt="Profile"
                  style={{
                    width: '180px',   // Fixed width
                    height: '180px',  // Fixed height
                    borderRadius: '50%',  // Make it circular
                    objectFit: 'cover', // Ensures the image fills the circle
                    border: '2px solid #ddd' // Optional: Add border to make the image stand out
                  }}
                />
                {/* Button to update profile picture */}
                <button
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#profilePicModal"
                  style={{
                    position: 'absolute',
                    bottom: '1px', // Position the button at the bottom
                    left: '60%',
                    transform: 'translateX(-50%)', // Center the button horizontally
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: background for better visibility
                    borderRadius: '50%', // Round the button
                    padding: '8px'
                  }}
                >
                  <RiImageAddLine style={{ color: 'white', fontSize: '25px' }} />
                </button>
              </div>
            </center>
            <div className="card-body mt-2">
              <h3 className="card-title text-center">{user.fullName}</h3>
            </div>
          </div>
        </div>

        {/* User Details Section */}
        <div className="col-sm-12 col-lg-7">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title">User Details</h1>

              {/* Conditionally render profile details or edit form */}
              {isEditing ? (
                <div className="card p-3 mt-4">
                  <h4>Edit Profile</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={editedUser.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        name="userName"
                        className="form-control"
                        value={editedUser.userName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={editedUser.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={editedUser.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Bio</label>
                      <textarea
                        name="bio"
                        className="form-control"
                        value={editedUser.bio}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={editedUser.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <button 
                      className="btn btn-primary mt-3" 
                      onClick={handleSave}
                      disabled={!isFormValid()} // Disable the button if form is invalid
                    >
                      Save Changes
                    </button>
                    <button
                      className="btn btn-secondary mt-3 ms-3"
                      onClick={() => setIsEditing(false)} // Close edit form without saving
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              ) : (
                <div className="card p-3 mt-4">
                  <h4>User Name:</h4>
                  <p>{user.userName}</p>
                  <h4>Phone No: </h4>
                  <p>{user.phone}</p>
                  <h4>Email Id: </h4>
                  <p>{user.email}</p>
                  <h4>Address:</h4>
                  <p>{user.address}</p>
                  <h4>Bio:</h4>
                  <p>{user.bio}</p>
                  <button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for uploading a profile picture */}
      <div className="modal fade" id="profilePicModal" tabIndex="-1" aria-labelledby="profilePicModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="profilePicModalLabel">Upload New Profile Picture</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProfilePictureChange}
                className="form-control" 
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;