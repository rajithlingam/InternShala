import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Channel() {
  const { id } = useParams();
  const { API, authHeaders, user } = useAuth();
  const [info, setInfo] = useState(null);
  const [videos, setVideos] = useState([]);

  async function load() {
    const { data } = await axios.get(API + "/api/channels/" + id);
    setInfo(data);
    const v = await axios.get(API + "/api/channels/" + id + "/videos");
    setVideos(v.data);
  }
  useEffect(() => {
    load();
  }, [id]);

  async function createOrUpdate(video) {
    if (video._id) {
      await axios.put(API + "/api/videos/" + video._id, video, {
        headers: authHeaders(),
      });
    } else {
      await axios.post(
        API + "/api/videos",
        { ...video, channel: id },
        { headers: authHeaders() }
      );
    }
    await load();
  }
  async function del(vId) {
    await axios.delete(API + "/api/videos/" + vId, { headers: authHeaders() });
    await load();
  }

  if (!info) return <div className="container">Loading...</div>;

  const canManage = user && user.id === info.owner;

  return (
    <div className="container">
      <h2>{info.channelName}</h2>
      <p style={{ color: "var(--muted)" }}>{info.description}</p>

      {canManage && <Editor onSave={createOrUpdate} />}

      <h3>Videos</h3>
      <div className="grid">
        {videos.map((v) => (
          <div key={v._id} className="card">
            <Link to={"/watch/" + v._id}>
              <img src={v.thumbnailUrl} />
            </Link>
            <div className="p">
              <div style={{ fontWeight: 600 }}>{v.title}</div>
              {canManage && (
                <div className="row" style={{ gap: 8 }}>
                  <Editor initial={v} onSave={createOrUpdate} />
                  <button className="btn" onClick={() => del(v._id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Editor({ initial = {}, onSave }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [videoUrl, setVideoUrl] = useState(initial.videoUrl || "");
  const [thumbnailUrl, setThumbnailUrl] = useState(initial.thumbnailUrl || "");
  const [categories, setCategories] = useState(
    (initial.categories || []).join(",")
  );

  return (
    <div className="card" style={{ padding: 12, margin: "12px 0" }}>
      <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <input
          className="input"
          placeholder="Thumbnail URL"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
        <input
          className="input"
          placeholder="Categories (comma-separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <button
          className="btn primary"
          onClick={() =>
            onSave({
              ...(initial._id ? { _id: initial._id } : {}),
              title,
              description,
              videoUrl,
              thumbnailUrl,
              categories: categories
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
        >
          {initial._id ? "Update" : "Upload"}
        </button>
      </div>
    </div>
  );
}
