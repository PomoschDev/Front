import { Routes, Route, Navigate } from "react-router-dom";
import { routers } from "./index.js";

const Approuter = () => {
  return (
    <>
      <Routes>
        {routers.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Approuter;