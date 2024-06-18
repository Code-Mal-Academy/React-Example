import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { userContext } from "../context";

const Layout = () => {
  const navigate = useNavigate();

  const [nameState, setNameState] = useState();
  let [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");

  const changeRoute = () => {
    navigate("/search", { replace: false });
    setSearchParams({ name: nameState });
  };

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>

          <button onClick={changeRoute}>Search</button>
        </div>
      </div>
      <div id="detail">
        <userContext.Provider value={nameState}>
          <Outlet />
        </userContext.Provider>
      </div>
    </>
  );
};

export default Layout;
