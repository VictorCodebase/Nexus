import React, { useState, useEffect } from "react";
import EditModal from "../components/editModal";
import { editPapers } from "../services/paperServices";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paperToEdit = location.state?.paper || null; // Get the paper data passed via state

  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default
  const [error, setError] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(-1); // Navigate back to the previous page
  };

  const handleEditSubmit = async (formData) => {
    try {
      if (!paperToEdit) return;

      // Call the API to update the paper
      await editPapers(paperToEdit.paper_id, formData);

      // Close the modal and navigate back
      setIsModalOpen(false);
      navigate(-1);
    } catch (err) {
      console.error("Error editing paper:", err);
      setError("Failed to edit the paper. Please try again.");
    }
  };

  useEffect(() => {
    if (!paperToEdit) {
      // If no paper data is passed, redirect back
      navigate(-1);
    }
  }, [paperToEdit, navigate]);

  return (
    <div>
      {error && <p className="text-red-600 text-center">{error}</p>}
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleEditSubmit}
          paperData={paperToEdit} // Pass the paper data to pre-fill the modal
        />
      )}
    </div>
  );
};

export default Edit;