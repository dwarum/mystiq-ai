import {useEffect, useState} from "react";
import Layout from "../src/layouts/Layout";
import Header1 from "../src/layouts/headers/Header1";
import Footer1 from "../src/layouts/footers/Footer1";

const EmployeeInfo = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //check if employee is logged in
        const loggedIn = sessionStorage.getItem("isLoggedIn");
        if (loggedIn === "true"){
            setIsLoggedIn("true");
        }else{
            //Redirect to home page
            window.location.href = "/";
        }
    }, []);

    const handleLogout = () =>{
        sessionStorage.removeItem("isLoggedIn");
        window.location.href="/";
    };

    if (!isLoggedIn){
        return null;
    }
return (
    <Layout noHeader noFooter>
      <Header1 />
      
      <section className="employee-info-section pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="employee-info-card">
                <div className="card-header">
                  <h2>Employee Information</h2>
                  <button onClick={handleLogout} className="main-btn">
                    Logout
                  </button>
                </div>
                
                <div className="card-body">
                  <div className="info-grid">
                    <div className="info-item">
                      <label>Name:</label>
                      <p>John Doe</p>
                    </div>
                    <div className="info-item">
                      <label>Email:</label>
                      <p>admin@mystiqabs.com</p>
                    </div>
                    <div className="info-item">
                      <label>Department:</label>
                      <p>Consulting</p>
                    </div>
                    <div className="info-item">
                      <label>Position:</label>
                      <p>Senior Consultant</p>
                    </div>
                  </div>

                  <div className="data-table-section">
                    <h3>Employee Data</h3>
                    <table className="employee-table">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Status</th>
                          <th>Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Digital Transformation</td>
                          <td>Acme Corp</td>
                          <td><span className="status-active">Active</span></td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td>System Integration</td>
                          <td>Tech Solutions</td>
                          <td><span className="status-active">Active</span></td>
                          <td>85</td>
                        </tr>
                        <tr>
                          <td>Cloud Migration</td>
                          <td>Global Industries</td>
                          <td><span className="status-completed">Completed</span></td>
                          <td>200</td>
                        </tr>
                      </tbody>
                    </table>

                    <button className="main-btn mt-30">
                      Download as PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </Layout>
  );
};

export default EmployeeInfo;