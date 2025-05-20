import React, { useState } from "react";
import axios from "axios";
import lightDark from "../store/lightDark";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();
  const dark = lightDark((state) => state.dark);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, content };

    try {
      await axios.post(
        "https://my-web-page-server-production.up.railway.app/posts",
        postData
      );

      alert(t("community.postCreation.success"));
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post", error);
      alert(t("community.postCreation.error"));
    }
  };

  const fetchPosts = async () => {
    try {
      if (!showPosts) {
        const response = await axios.get(
          "https://my-web-page-server-production.up.railway.app/posts"
        );

        setPosts(response.data);
      }
      setShowPosts((prevState) => !prevState);
    } catch (error) {
      console.error("Error fetching posts", error);
      alert(t("community.postFetch.error"));
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://my-web-page-server-production.up.railway.app/posts/${postId}`
      );
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      alert(t("community.postDeletion.success"));
    } catch (error) {
      console.error("Error deleting post", error);
      alert(t("community.postDeletion.error"));
    }
  };

  return (
    <div
      className="community-page-wrapper"
      style={{
        color: dark ? "#fff" : "#000",
        width: window.innerWidth <= 768 ? "90%" : "50%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: "30px",
        margin: window.innerWidth <= 768 ? "20px auto" : "30px auto",
      }}
    >
      <div
        className="post-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="post-creation"
          style={{
            width: "80%",
            maxWidth: "570px",
            border: "1px solid black",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("community.titlePlaceholder")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "98%",
                padding: "8px",
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #3C3D37",
              }}
            />
            <textarea
              placeholder={t("community.contentPlaceholder")}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: "98%",
                padding: "8px",
                height: "100px",
                marginBottom: "10px",
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #3C3D37",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                backgroundColor: "#e07a5f",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t("community.createPostButton")}
            </button>
          </form>

          <button
            onClick={fetchPosts}
            style={{ marginTop: "10px", padding: "10px 15px" }}
          >
            {showPosts
              ? t("community.collapsePosts")
              : t("community.viewAllPosts")}
          </button>
        </div>

        {showPosts && (
          <div
            className="all-posts"
            style={{
              marginTop: "20px",
              width: "80%",
              maxWidth: "600px",
              marginBottom: "30px",
            }}
          >
            <h3
              style={{
                color: dark ? "#fff" : "#000",
                display: "inline-block",
                borderBottom: `2px  ${dark ? "#fff" : "#000"}`,
              }}
            >
              {t("community.allPosts")}
            </h3>
            {posts.length === 0 ? (
              <p>{t("community.noPosts")}</p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="post-card"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    marginBottom: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: dark ? "#F7E9E1" : "#F7E9E1",
                    color: dark ? "#000" : "#000",
                    borderRadius: "10px",
                  }}
                >
                  <h4 style={{ color: dark ? "#000" : "#000" }}>
                    {post.title}
                  </h4>
                  <p>{post.content}</p>
                  <small>
                    {t("community.createdAt", {
                      date: new Date(post.created_at).toLocaleString(),
                    })}
                  </small>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => deletePost(post.id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#CF0A0A",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#A30808")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#CF0A0A")
                      }
                    >
                      {t("community.deletePostButton")}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
