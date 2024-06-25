import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";

const Home = () => (
  <>
    <Hero />
    <Services />
    <Banner />
    <AppStore />
    <Testimonials />
  </>
);

const Layout = ({ children }) => (
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AppStore />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
