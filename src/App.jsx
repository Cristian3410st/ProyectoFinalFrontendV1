import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/public/RegisterPage";
import LoginPage from "./pages/public/LoginPage";
import UserPage from "./pages/private/UserPage";
import { AccessProvider } from "./contexts/AccessContex";
import GetsSchedulePage from "./pages/private/GetsSchedulePage";
import HomePage from "./pages/public/HomePage";
import HelpPage from "./pages/public/HelpPage";
import ContactPage from "./pages/public/ContactPage";
import HistoryPage from "./pages/public/HistoryPage";
import SuggestionsPage from "/src/pages/public/SuggestionsPage";
import ProtectedRouteUser from "./protectedRouteUser";
import ProtectedAdmin from "./protectedRouteAdmin";
import { TaskProvider } from "./contexts/TasksContext";
import ManualPage from "./pages/private/ManualPage";
import NavBar from "./components/Navbar";
import AlterPasswordPage from "./pages/private/AlterPasswordPage";
import AdminPage from "./pages/privateAdmin/AdminPage";
import HorariosAlterPage from "./pages/privateAdmin/HorariosAlterPage";
import AlterPasswordPageAdmin from "./pages/privateAdmin/AlterPasswordPageAdmin";

function App() {
  return (
    <AccessProvider>
      <TaskProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />}/>

            <Route element={<ProtectedRouteUser />}>
              <Route path="/user" element={<UserPage/>} />
              <Route path="/getSchedule" element={<GetsSchedulePage />} />
              <Route path="/alterPassword" element={<AlterPasswordPage/>}/>
               <Route path="/Manual" element={<ManualPage/>}/>
            </Route>
              
              <Route element={<ProtectedAdmin/>}>
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/horariosAlter" element={<HorariosAlterPage/>}></Route>
              <Route path="/modifyPassword" element={<AlterPasswordPageAdmin/>}></Route>
              </Route>

          </Routes>
        </Router>
      </TaskProvider>
    </AccessProvider>
  );
}

export default App;
