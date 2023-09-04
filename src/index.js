import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactUsPage from "./pages/ContactUsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/00" element={<CaseStudyPage />} />
        <Route path="/case-study/01" element={<CaseStudyPage />} />
        <Route path="/case-study/02" element={<CaseStudyPage />} />
        <Route path="/case-study/03" element={<CaseStudyPage />} />
        <Route path="/case-study/04" element={<CaseStudyPage />} />
        <Route path="/case-study/05" element={<CaseStudyPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
