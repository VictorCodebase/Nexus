import React, { useEffect, useState } from "react";
import { getPapersByUser } from "../services/paperServices";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [papers, setPapers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // Define parsedUser here
      setUser(parsedUser);

      // Fetching the papers by user ID
      fetchUserPapers(parsedUser.id); // Use parsedUser.id
    }
  }, []);

  const fetchUserPapers = async (userId) => {
    try {
      const userPapers = await getPapersByUser(userId);
      setPapers(userPapers.data);
    } catch (err) {
      console.error("Error fetching user papers:", err);
      setError("Failed to fetch user papers");
    }
  };
  console.log("this are the user papers", papers);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Profile
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-gray-700"
            >
              First Name
            </label>
            <p className="mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg">
              {user.fname}
            </p>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold text-gray-700"
            >
              Last Name
            </label>
            <p className="mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg">
              {user.lname}
            </p>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Username
            </label>
            <p className="mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg">
              {user.username}
            </p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <p className="mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg">
              {user.email}
            </p>
          </div>
        </div>
        {/* Displaying the papers */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Papers</h2>
          {papers.length > 0 ? (
            papers.map((paper) => (
              <div key={paper.id} className="bg-gray-100 p-4 rounded-lg mb-4">
                <Link
                  to={`/browser/${paper.paper_id}`}
                  className="text-blue-600 hover:underline"
                >
                <h3 className="text-xl font-semibold text-blue-500">
                  {paper.paper_name}
                </h3>
                </Link>
                <p className="text-sm text-gray-600">
                  Published: {new Date(paper.created_at).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No papers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;