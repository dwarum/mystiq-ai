import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/components/PageBanner";
import Header1 from "../src/layouts/headers/Header1";
import Footer1 from "../src/layouts/footers/Footer1";
import Accordion from "../src/components/accordion/Accordion";

const EmployeeInfo = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    

    // This would come from actual login - hardcoded for now
    const currentUser = {
      name: "Ramya Rajaram",
      email: "ramya.rajaram@mystiq.ai",
      phone: "+1 551-225-4119",
      title: "Lead Applications Engineer",
      department: "Client Services",
      location: "Remote",
      employeeId: "43991",
      hireDate: "January 15, 2024",
      employmentType: "Full-Time",
      username: "ramya.rajaram", // Used for payslip folder
      photo: "/employees/ramya-rajaram.jpg" // Photo path
    };

    const etoData = {
      totalAccrued: 24,
      used: 0,
      available: 24
    };

    const holidays2026 = [
      { name: "New Year's Day", date: "January 1, 2026", day: "Thursday" },
      { name: "Memorial Day", date: "May 25, 2026", day: "Monday" },
      { name: "Independence Day", date: "July 4, 2026", day: "Saturday" },
      { name: "Labor Day", date: "September 7, 2026", day: "Monday" },
      { name: "Thanksgiving", date: "November 26, 2026", day: "Thursday" },
      { name: "Day After Thanksgiving", date: "November 27, 2026", day: "Friday" },
      { name: "Christmas Eve", date: "December 24, 2026", day: "Thursday" },
      { name: "Christmas Day", date: "December 25, 2026", day: "Friday" },
    ];

    const [payslips] = useState([
      { month: "December 2025", file: "Payslip_Dec2025.pdf" },
      { month: "November 2025", file: "Payslip_Nov2025.pdf" },
      { month: "October 2025", file: "Payslip_Oct2025.pdf" },
      { month: "Q4 2025 Incentive", file: "Payslip_Incentive2025.pdf" },
    ]);

    const performanceReview = {
      period: "2025",
      reviewDate: "December 19, 2025",
      reviewer: "Manager",
      categories: [
        {
          name: "Technical Skills",
          rating: 4,
          ratingText: "Exceeds Expectations"
        },
        {
          name: "Communication",
          rating: 3.5,
          ratingText: "Meets Expectations Plus"
        },
        {
          name: "Leadership/Initiative",
          rating: 4,
          ratingText: "Exceeds Expectations"
        },
        {
          name: "Customer Satisfaction",
          rating: 3,
          ratingText: "Meets Expectations"
        }
      ],
      overallScore: 3.6,
      managerComments: "Ramya has demonstrated strong technical leadership on key client projects and has consistently met and exceeded expectations. Her communication with clients has been exemplary, and she has taken initiative in mentoring junior team members."
    };

    useEffect(() => {
        //check if employee is logged in
        const loggedIn = sessionStorage.getItem("isLoggedIn");
        if (loggedIn === "true"){
            setIsLoggedIn(true);
            setIsLoading(false);
        }else{
            //Redirect to home page
            router.push("/");
        }
    }, [router]);

    const handleLogout = () =>{
        sessionStorage.removeItem("isLoggedIn");
        router.push("/");
    };

    const handleViewOrDownloadPayslip = (filename) =>{
      const url = `/payslips/${filename}`;
      window.open(url, '_blank');
    }

    if(isLoading){
      return (
        <Layout noHeader noFooter>
          <Header1 />
            <div style={{ 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <h2>Loading...</h2>
            </div>
          <Footer1 />
      </Layout>
      )
    }

    if (!isLoggedIn){
        return null;
    }
return (
    <Layout>
      <PageBanner pageName={"Careers"} pageTitle={"Employee Information"} />
      
      <section className="employee-info-section pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-14">
                <div className="employee-info-card">
                  <div className="card-header">
                    <h2>Employee Details</h2>
                    <button onClick={handleLogout} className="main-btn">
                      Logout
                    </button>
                  </div>
                  
                  <div className="card-body">
                    {/* Personal Information with Photo */}
                    <div className="employee-profile-section">
                      {/* Employee Photo */}
                      <div className="employee-photo-container">
                        <img 
                          src={currentUser.photo}
                          alt={currentUser.name}
                          className="employee-photo"
                          onError={(e) => {
                            e.target.src = "/employees/ramya-rajaram.jpg";
                          }}
                        />
                      </div>

                      {/* Employee Info - Label: Value on same line */}
                      <div className="info-list-horizontal">
                        <div className="info-row">
                          <span className="info-label">NAME:</span>
                          <span className="info-value">{currentUser.name}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">EMPLOYEE ID:</span>
                          <span className="info-value">{currentUser.employeeId}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">EMAIL:</span>
                          <span className="info-value">{currentUser.email}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">PHONE:</span>
                          <span className="info-value">{currentUser.phone}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">TITLE:</span>
                          <span className="info-value">{currentUser.title}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">DEPARTMENT:</span>
                          <span className="info-value">{currentUser.department}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">LOCATION:</span>
                          <span className="info-value">{currentUser.location}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">HIRE DATE:</span>
                          <span className="info-value">{currentUser.hireDate}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">EMPLOYMENT TYPE:</span>
                          <span className="info-value">{currentUser.employmentType}</span>
                        </div>
                      </div>
                    </div>

                    {/** ETO Accordion */}
                    <Accordion title="Leave & Time-Off" defaultOpen={false}>
                      {/* ETO Policy Banner */}
                      <div className="eto-policy-banner">
                        <i className="fas fa-info-circle"></i>
                        <span>For every 8 hours worked, you earn 1 hour of ETO (Earned Time Off)</span>
                      </div>

                      {/* ETO Balance Cards */}
                      <div className="eto-stats-grid">
                        <div className="eto-card eto-total">
                          <div className="eto-icon">📊</div>
                          <div className="eto-label">Total Accrued</div>
                          <div className="eto-value">{etoData.totalAccrued} hrs</div>
                        </div>
                        
                        <div className="eto-card eto-used">
                          <div className="eto-icon">⏱️</div>
                          <div className="eto-label">Used</div>
                          <div className="eto-value">{etoData.used} hrs</div>
                        </div>
                        
                        <div className="eto-card eto-available">
                          <div className="eto-icon">✅</div>
                          <div className="eto-label">Available</div>
                          <div className="eto-value">{etoData.available} hrs</div>
                        </div>
                      </div>

                      {/* Holiday Calendar */}
                      <div className="holiday-section">
                        <h4>
                          <i className="fas fa-calendar-alt"></i> Upcoming Holidays - 2026
                        </h4>
                        <table className="holiday-table">
                          <thead>
                            <tr>
                              <th>Holiday</th>
                              <th>Date</th>
                              <th>Day</th>
                            </tr>
                          </thead>
                          <tbody>
                            {holidays2026.map((holiday, index) => (
                              <tr key={index}>
                                <td>
                                  <span className="holiday-emoji">🎉</span> {holiday.name}
                                </td>
                                <td>{holiday.date}</td>
                                <td>{holiday.day}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Accordion>

                    {/** Payslips Accordion*/}
                    <Accordion title="Payslips" defaultOpen={false}>
                      <div className="eto-policy-banner">
                        <i className="fas fa-info-circle"></i>
                        <span>Displays payslips for the last 3 months. Contact hr@mystiq.ai for older payslips.</span>
                      </div>
                      <table className="employee-table payslips-table">
                        <thead>
                          <tr>
                            <th>Month</th>
                            <th></th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          {
                            payslips.map((payslip, index) => (
                              <tr key={index}>
                                <td>{payslip.month}</td>
                                <td></td>
                                <td>
                                  <button onClick={()=>handleViewOrDownloadPayslip(payslip.file)}
                                    style={{
                                            backgroundColor: '#14213D',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'all 0.3s'
                                          }}
                                          onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#C9A961';
                                          }}
                                          onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#14213D';
                                          }}>
                                    View/Download PDF
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </Accordion>

                    {/** Performance Review Accordion */}
                    <Accordion title="Performance Review" defaultOpen={false}>
                      {/* Review Header */}
                      <div className="review-header">
                        <div className="review-header-item">
                          <span className="review-label">Review Period:</span>
                          <span className="review-value">{performanceReview.period}</span>
                        </div>
                        <div className="review-header-item">
                          <span className="review-label">Review Date:</span>
                          <span className="review-value">{performanceReview.reviewDate}</span>
                        </div>
                        <div className="review-header-item">
                          <span className="review-label">Reviewer:</span>
                          <span className="review-value">{performanceReview.reviewer}</span>
                        </div>
                      </div>

                      {/* Performance Cards - Two Column Layout */}
                      <div className="performance-cards-container">
                        
                        {/* LEFT CARD - Categories */}
                        <div className="performance-categories-card">
                          <h4 className="card-title">Performance Categories</h4>
                          {performanceReview.categories.map((category, index) => (
                            <div className="category-row" key={index}>
                              <span className="category-name">{category.name}</span>
                              <div className="category-rating-group">
                                <span className="category-rating-number">{category.rating}</span>
                                <span className="category-rating-text">{category.ratingText}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* RIGHT CARD - Overall Rating */}
                        <div className="overall-rating-card">
                          <div className="overall-card-content">
                            <div className="overall-label">RATING</div>
                            <div className="overall-value">{performanceReview.overallScore.toFixed(2)}</div>
                            <div className="overall-status">
                              {performanceReview.overallScore >= 3.5 ? "Meets Expectations Plus" : 
                              performanceReview.overallScore >= 2.5 ? "Meets Expectations" : 
                              "Needs Improvement"}
                            </div>
                          </div>
                        </div>
                        
                      </div>

                      {/* Manager Comments */}
                      <div className="manager-comments-section">
                        <h4>
                          <i className="fas fa-comment-dots"></i> Manager Comments
                        </h4>
                        <div className="manager-comments-box">
                          {performanceReview.managerComments}
                        </div>
                      </div>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
    </Layout>
  );
};

export default EmployeeInfo;