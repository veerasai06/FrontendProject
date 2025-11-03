import { useState } from "react";
import Login from "./components/Login";
import AdminPortal from "./components/AdminPortal";
import StudentPortal from "./components/StudentPortal";

function App() {
  const [role, setRole] = useState(""); // "admin" or "student"

  return (
    <div>
      {!role && <Login setRole={setRole} />}
      {role === "admin" && <AdminPortal />}
      {role === "student" && <StudentPortal />}
    </div>
  );
}

export default App;
