import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Channel from "./pages/Channel";
import SignIn from "./pages/SignIn";
import { AuthProvider, useAuth } from "./context/AuthContext";
import axios from "axios";
import { Trie, debounce } from "./utils/dsa";

function Header({ onToggleSidebar }) {
  const [q, setQ] = useState("");
  const [sugg, setSugg] = useState([]);
  const suggRef = useRef();
  const nav = useNavigate();
  const { user, logout, API } = useAuth();
  const trieRef = useRef(new Trie());

  useEffect(() => {
    axios
      .get(API + "/api/videos")
      .then(({ data }) => {
        data.slice(0, 200).forEach((v) => trieRef.current.insert(v.title));
      })
      .catch(() => {});
  }, []);

  const onSuggest = debounce((val) => {
    if (!val) return setSugg([]);
    setSugg(trieRef.current.suggest(val, 6));
  }, 120);

  function onSubmit(e) {
    e.preventDefault();
    setSugg([]);
    nav("/?q=" + encodeURIComponent(q));
  }

  return (
    <div className="header">
      <button className="btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <Link to="/" className="brand">
        StreamScape
      </Link>
      <form
        onSubmit={onSubmit}
        style={{
          flex: 1,
          display: "flex",
          gap: 8,
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div style={{ position: "relative", flex: 1 }}>
          <input
            className="input"
            placeholder="Search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              onSuggest(e.target.value);
            }}
          />
          {sugg.length > 0 && (
            <ul className="suggestions">
              {sugg.map((s) => (
                <li
                  key={s}
                  onClick={() => {
                    setQ(s);
                    setSugg([]);
                    nav("/?q=" + encodeURIComponent(s));
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="btn">Search</button>
      </form>
      {!user ? (
        <Link to="/signin" className="btn primary">
          Sign in
        </Link>
      ) : (
        <div className="row">
          <img
            src={user.avatar}
            alt=""
            width="28"
            height="28"
            style={{ borderRadius: 999 }}
          />
          <span>{user.username}</span>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function Layout() {
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <div className={hideSidebar ? "hideSidebar" : ""}>
      <Header onToggleSidebar={() => setHideSidebar((s) => !s)} />
      <div className="layout">
        <aside className="sidebar">
          <p>
            <b>Browse</b>
          </p>
          <nav style={{ display: "grid", gap: 8 }}>
            <Link className="btn" to="/">
              Home
            </Link>
          </nav>
        </aside>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
