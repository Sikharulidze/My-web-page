import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  // Function to handle form submission and create post
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, content };

    try {
      // Post request to create a new post
      await axios.post("http://localhost:5000/api/posts", postData);
      alert("Post created successfully!");
      setTitle(""); // Clear title
      setContent(""); // Clear content
    } catch (error) {
      console.error("Error creating post", error);
      alert("Error creating post");
    }
  };

  // Fetch posts when button is clicked
  const fetchPosts = async () => {
    try {
      // Get all posts from the API
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
      setShowPosts(true); // Show the posts after fetching
    } catch (error) {
      console.error("Error fetching posts", error);
      alert("Error loading posts");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="post-container">
        {/* Create post form */}
        <div className="post-creation">
          <h2>Create New Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                height: "100px",
                marginBottom: "10px",
              }}
            />
            <button type="submit" style={{ padding: "10px 15px" }}>
              Create Post
            </button>
          </form>

          {/* Button to fetch and display posts */}
          <button
            onClick={fetchPosts}
            style={{ marginTop: "10px", padding: "10px 15px" }}
          >
            See All Posts
          </button>
        </div>

        {/* Display all posts */}
        {showPosts && (
          <div className="all-posts" style={{ marginTop: "20px" }}>
            <h3>All Posts</h3>
            {posts.length === 0 ? (
              <p>No posts found.</p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="post-card"
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                  <small>
                    Created at: {new Date(post.created_at).toLocaleString()}
                  </small>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
