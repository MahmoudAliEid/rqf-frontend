// ** import React Router Dom
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { Upload } from "./components/pages/Upload";
import OurWork from "./components/sections/OurWork";
import AddConsultant from "./components/pages/AddConsultant";
import AddService from "./components/pages/AddService";
import AddNews from "./components/pages/AddNews";
import ConsulatantsList from "./components/pages/ConsultantsList";
import ServicesList from "./components/pages/ServiceList";
import BlogList from "./components/pages/BlogList";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/our-work"
        element={<OurWork />}
      />
      <Route
        path="/admin/upload"
        element={<Upload />}
      />
      <Route
        path="/admin/consultants"
        element={<ConsulatantsList />}
      />
      <Route
        path="/admin/services"
        element={<ServicesList />}
      />
      <Route
        path="/admin/news"
        element={<BlogList />}
      />
      
      <Route
        path="/admin/create-consultant"
        element={<AddConsultant />}
      />
      <Route
        path="/admin/create-service"
        element={<AddService />}
      />
      <Route
        path="/admin/create-news"
        element={<AddNews />}
      />
      
    </Routes>
  );
};
export default AppRouter;
