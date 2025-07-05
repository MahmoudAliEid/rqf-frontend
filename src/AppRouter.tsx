// ** import React Router Dom
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
// import { Upload } from "./components/pages/Upload";
// import OurWork from "./components/sections/OurWork";
import AddConsultant from "./components/pages/AddConsultant";
import AddService from "./components/pages/AddService";
import AddNews from "./components/pages/AddNews";
import ConsulatantsList from "./components/pages/ConsultantsList";
import ServicesList from "./components/pages/ServiceList";
import BlogList from "./components/pages/BlogList";
import EditConsultant from "./components/pages/EditConsultant";
import EditService from "./components/pages/EditService";
import EditBlog from "./components/pages/EditBlog";

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
      {/* <Route
        path="/our-work"
        element={<OurWork />}
      />
      <Route
        path="/admin/upload"
        element={<Upload />}
      /> */}
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
      <Route
        path="/admin/edit-consultant/:id"
        element={<EditConsultant />}
      />
      <Route
        path="/admin/edit-service/:id"
        element={<EditService />}
      />
      <Route
        path="/admin/edit-blog/:id"
        element={<EditBlog />}
      />
      <Route
        path="*"
        element={<Home />}
      />
      {/* Fallback route for any unmatched paths */}
      {/* This will redirect to Home, you can change it to a 404 page if needed */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* Uncomment the above line if you have a NotFound component */}
      {/* This will ensure that any unmatched route will redirect to Home */}
      {/* or to a NotFound component if you have one */}
      {/* You can also add a 404 page component here if you want */}
      {/* <Route path="*" element={<NotFound />} /> */}
      
    </Routes>
  );
};
export default AppRouter;
