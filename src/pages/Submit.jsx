import React, { useState, useEffect } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";
import { uploadPapers } from "../services/paperServices";

const Submit = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [tags, setTags] = useState("");
  const [coauthors, setCoauthors] = useState("");
  const [meta, setMeta] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!file || !title || !description || !category || !publisher) {
      setError("All required fields must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", title);
    formData.append("description", description);
    formData.append("category", Number(category)); // ensure it's a number
    formData.append("publisher", Number(publisher)); // must match Postman format

    formData.append(
      "tags",
      JSON.stringify(
        tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== "")
      )
    );

    formData.append(
      "coauthors",
      JSON.stringify(
        coauthors
          .split(",") // convert comma-separated string to array
          .map((c) => c.trim()) // trim whitespace
          .filter((c) => c !== "") // remove empty strings
      )
    );

    formData.append("meta", meta);

    // Check if meta is an object and convert it to a string
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      await uploadPapers(formData, token);
      setSuccess("File uploaded successfully!");
      setFile(null);
      setTitle("");
      setDescription("");
      setCategory("");
      setPublisher("");
      setTags("");
      setCoauthors("");
      setMeta("");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.log("this is the error", err);
      setError(
        err.response?.data?.error ||
          "Failed to upload the file. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Submit Research Document
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the form below to upload your research paper
          </p>
        </div>
        {error && (
          <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 mb-4 text-center font-medium">
            {success}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Category *
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Publisher *
            </label>
            <input
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Coauthors (comma-separated)
            </label>
            <input
              type="text"
              value={coauthors}
              onChange={(e) => setCoauthors(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Meta Information
            </label>
            <textarea
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              rows={2}
              className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700">
              Upload File *
            </label>
            <div className="flex items-center gap-3 mt-1 border border-dashed border-blue-400 p-4 rounded-lg">
              <UploadCloud className="w-6 h-6 text-blue-500" />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-700"
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              onClick={() => {
                console.log("submitting");
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Submit Document
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
