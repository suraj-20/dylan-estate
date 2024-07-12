import React from "react";
import "./PreviewPage.css";

import Footer from "../../components/footer/Footer";
import TopPreviewContent from "../../components/top-preview-content/TopPreviewContent ";
import BottomPreviewContent from "../../components/bottom-preview-content/BottomPreviewContent ";

const PreviewPage = () => {
  return (
    <div className="preview-page d-flex flex-column gap-5">
      <TopPreviewContent />
      <BottomPreviewContent />
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default PreviewPage;
