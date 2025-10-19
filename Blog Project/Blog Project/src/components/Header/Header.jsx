import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogOutBtn } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !status },
    { name: "Signup", slug: "/signup", active: !status },
    { name: "All Posts", slug: "/all-posts", active: status },
    { name: "Add Post", slug: "/add-post", active: status },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <Container>
        <nav className="flex items-center h-16">
          <div className="mr-6">
            <Link to="/" className="inline-flex items-center">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex items-center gap-1 ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {status && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
