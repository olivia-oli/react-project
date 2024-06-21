import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  return (
    <div>
      <h1>Profile {params.userId}</h1>
      <p>Profile Information</p>
      <p>Address</p>
    </div>
  );
};

export default Profile;
