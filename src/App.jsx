import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/profile-data").then((p) => {
      setProfileData(p.data.data);
    });
  }, []);
  return (
    <>
      {profileData ? (
        <>
          <main className="main-content">
            {/* <!-- First Section AKA Hero Section --> */}
            <section className="col-span-1">
              <div className="hero-section">
                <img
                  src="/jibrin.jpg"
                  alt="smiling man with glasses "
                  className="hero-img"
                />
                <div className="hero-content ">
                  <div className="hero-text-container show-mobile-only">
                    {/* <p className="hero-text-name">khalid jibrin</p> */}
                    <p className="hero-text-name">{profileData.fullName}</p>
                    {/* <p className="hero-text-position">Software Engineer</p> */}
                    <p className="hero-text-position">{profileData.jobTitle}</p>
                  </div>
                  <div className="hero-btn-container show-mobile-only">
                    <button className="btn btn-blue">Share Link</button>
                    <button className="btn btn-outline">Projects</button>
                  </div>
                </div>
              </div>
              {/* <!-- Personal Info Section --> */}
              <div className="personal-info-section gen-pad">
                <div className="sub-info-container">
                  {/* <b className="sub-info-label">Male</b> */}
                  <b className="sub-info-label">{profileData.gender}</b>
                  <span className="sub-info-title">Gender</span>
                </div>
                <div className="sub-info-container">
                  <b className="sub-info-label">{profileData.residence}</b>
                  <span className="sub-info-title">State of residence</span>
                </div>
                <div className="sub-info-container">
                  <b className="sub-info-label">
                    {profileData.experienceLevel}
                  </b>
                  <span className="sub-info-title">Experience Level</span>
                </div>

                <div className="contacts-container">
                  <h5 className="section-titles">Contacts</h5>
                  <div className="contacts-wrapper">
                    {/* {profileData.contacts[0]} */}
                    <a href={`mailto:${profileData.contacts[0].value}`}>
                      {profileData.contacts[0].display}
                    </a>
                    {/* <a href="mailto:khalidjibrin@gmail.com">khalidjibrin@gmail.com</a> */}
                    <a href={`tel:${profileData.contacts[1].value}}`}>
                      {profileData.contacts[1].display}
                    </a>
                    {/* <a href="tel:+2347039501813">+2347039501813</a> */}
                  </div>
                  
                </div>

                {/* <!-- Socials Section --> */}
                <div className="socials-section">
                  <h5 className="section-titles">Socials</h5>
                  <div className="socials-icons">
                    <img src="/icons8-linked-in-48.png" alt="" className="" />
                    <img src="/icons8-twitterx-50.png" alt="" className="" />
                    <img src="/icons8-instagram-48.png" alt="" className="" />
                    <img src="/icons8-facebook-48.png" alt="" className="" />
                  </div>
                  <div className="contact-btn-wrapper">
                    <button className="btn btn-outline">Contact Me now</button>
                  </div>
                </div>
              </div>
            </section>
            <div className="">
              {/* <!-- Only show this section on desktop --> */}
              <div className="col-span-2 show-desktop-only gen-pad">
                <div className="hidden">
                  <p className="hero-text-name">{profileData.fullName}</p>
                  <p className="hero-text-position">Software Engineer</p>
                </div>
                <div className="hero-btn-container">
                  <button className="btn btn-blue">Share Link</button>
                  <button className="btn btn-outline">Projects</button>
                </div>
              </div>

              {/* <!-- Second Section --> */}
              <section className="gen-pad col-span-2 second-section">
                <h4 className="second-section-title section-titles">
                  What I Offer
                </h4>
                <div className="second-section-text">
                  {profileData.selfJobDescription.map((item, index) => (
                    <p
                      key={index}
                      style={{ padding: "1rem 0", fontSize: "1rem" }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>
              {/* <!-- Third Section  --> */}
              <section className="third-section gen-pad col-span-2">
                <h4 className="section-titles">Skill Sets</h4>
                <div className="skill-wrapper">
                  {profileData.skillsList.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-outline"
                    >
                      {item}
                      {/* Angular */}
                    </button>
                  ))}
                </div>
              </section>
              {/* <!-- Fourth Section --> */}
              <section className="gen-pad fourth-section col-span-2">
                <h4 className="section-titles">Certification</h4>
                {profileData.certifications.map((item, index) => (
                  <div key={index} className="cert-item-wrapper">
                    <p className="sub-info-label">{item.name}</p>
                    <p className="sub-info-title">{item.certificationSource}</p>
                  </div>
                ))}
              </section>
              {/* <!-- Fifth Section --> */}
              <section className="gen-pad fourth-section col-span-2">
                <h4 className="section-titles">Experience</h4>
                <div className="experience-container">
                  {profileData.experience.map((item, index) => (
                    <div key={index} className="experience-wrapper">
                      <div className="">
                        <img src="/icons8-linked-in-48.png" alt="" />
                      </div>
                      <div className="">
                        <p className="sub-info-label">{item.position}</p>
                        <p className="sub-info-title">{item.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
          {/* <!-- Footer --> */}
          <footer className="">
            <p className="">@copyright 2024</p>
          </footer>
        </>
      ) : null}
    </>
  );
}

export default App;
