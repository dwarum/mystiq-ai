import Link from "next/link";

const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <section className="hero-area">
      <div
        className="breadcrumbs-wrapper bg_cover"
        style={{
          backgroundImage: "url(assets/images/bg/hero-employee.jpg)",
          minHeight: "300px", // Adjust this value to match your desired height
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Text overlay removed - banner maintains height with minHeight style */}
      </div>
    </section>
  );
};

export default PageBanner;