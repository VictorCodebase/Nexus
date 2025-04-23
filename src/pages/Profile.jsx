import React, { useEffect, useState } from "react";
import { getPapersByUser,deletePapers } from "../services/paperServices";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";


const Profile = () => {
  const [user, setUser] = useState(null);
  const [papers, setPapers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchUserPapers(parsedUser.id);
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

  const handleEdit = (paperId) => {
  console.log(`Edit paper with ID: ${paperId}`);
  };

  const handleDelete =async (paperId) => {
    try{
      await deletePapers(paperId)

      //update the state for the deleted paper
      setPapers((prevPapers) => prevPapers.filter((paper)=>paper.paper_id !==paperId));

      console.log(`Deleted paper with ID: ${paperId}`);
    }catch(err){
      console.error("Error deleting paper:", err);
      setError("Failed to delete paper");
    }
    
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-500">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                First Name
              </label>
              <p className="mt-1 text-gray-800 bg-gray-100 px-4 py-2 rounded-md">
                {user.fname}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Last Name
              </label>
              <p className="mt-1 text-gray-800 bg-gray-100 px-4 py-2 rounded-md">
                {user.lname}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Username
              </label>
              <p className="mt-1 text-gray-800 bg-gray-100 px-4 py-2 rounded-md">
                {user.username}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Email
              </label>
              <p className="mt-1 text-gray-800 bg-gray-100 px-4 py-2 rounded-md">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Papers Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Papers</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {papers.length > 0 ? (
            papers.map((paper) => (
              <div
                key={paper.paper_id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                    <Link to={`/browser/${paper.paper_id}`}>{paper.paper_name}</Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    Published: {new Date(paper.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(paper.paper_id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(paper.paper_id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash size={20} />
                  </button>
                </div>
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