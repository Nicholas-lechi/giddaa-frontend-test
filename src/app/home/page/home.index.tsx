import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/navigation";

const HomePage: React.FC = () => {
  const [accordion, setAccordion] = useState(true);
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [tab, setTab] = useState(2);
  const [show, setShow] = useState(true);

  // const showRef = useRef<HTMLDivElement>(null);
  // const handleClickOutside = (event: MouseEvent) => {
  //   if (showRef.current && !showRef.current.contains(event.target as Node)) {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showRef]);

  return (
    <div className="home">
      <Header />
      <div className="main">
        <div className="landing">
          <div className="right container ">
            <p className="heading-text m-0">
              Securely and Affordably Own a Home in Nigeria —
            </p>
            <p className="heading m-0">Serving Nigerians Across the Globe.</p>
            <p>
              Experience confidence when buying a home in Nigeria whether you’re
              in Nigeria or Abroad! Enjoy peace of mind with legitimate
              transactions, straightfoward processes, and a variety of flexible
              payment options directly from top developers and banks.
            </p>
            <div className="d-flex ">
              <button className="btn btn-succ">Find a Home</button>
              <button className="btn btn-outline">
                10,000 People Have Seen This
              </button>
            </div>
          </div>
          <div className="left">
            <img src="/images/grid-photo.png" alt="grid" />
          </div>
        </div>
        {show && (
          <div className="login-section ">
            <div className="inner container">
              <div className="d-flex">
                <p className="login-text m-0">
                  Create an Account <span className="text-dark">or</span> Login
                </p>
                <p className="text-dark ms-1 m-0">
                  to Easily Discover Properties You Can Afford
                </p>
              </div>
              <div className="actions">
                <button className="btn affordable">Affordable</button>
                <hr />
                <button className="btn create">Create Account</button>
                <span>or</span>
                <button className="btn login">Log In</button>
              </div>
              <img
                src="/images/x.png"
                alt=""
                onClick={() => setShow(!show)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        )}
        <div className="partner">
          <div className="inner ">
            <div className="tag">
              <div className="tag-inner container">
                <p className="tag-text">
                  Our Partners
                  <span className="line"></span>
                </p>
              </div>
              <div className="marquee container pb-4">
                <Marquee speed={20}>
                  <div className="d-flex  gap-4 pb-4 pt-4">
                    <img src="/images/viber.png" alt="" />
                    <img src="/images/dropbox.png" alt="" />
                    <img src="/images/chrome.png" alt="" />
                    <img src="/images/vimeo.png" alt="" />
                    <img src="/images/viber.png" alt="" />
                    <img src="/images/dropbox.png" alt="" />
                    <img src="/images/chrome.png" alt="" />
                    <img src="/images/vimeo.png" alt="" />
                    <img src="/images/viber.png" alt="" />
                    <img src="/images/dropbox.png" alt="" />
                    <img src="/images/chrome.png" alt="" />
                    <img src="/images/vimeo.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
            <div className="people">
              <div className="transform">
                <div className="trust-us">
                  <img src="/images/handshake.png" alt="" />
                  <p>If They Trust Us, So Can You</p>
                </div>
              </div>
              <div className="inner container">
                <div className="box1">
                  <div className="top">
                    <img src="/images/smallplay.png" alt="" />
                  </div>
                  <div className="overlay">
                    <div className="inner">
                      <img src="/images/bigplay.png" alt="" />
                      <div className="bottom">
                        <p>Hear From Lanre Edun</p>
                        <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                      </div>
                    </div>
                  </div>
                  <div className="botom">
                    <p>Lanre Edun</p>
                    <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                  </div>
                </div>
                <div className="box2">
                  <div className="top">
                    <img src="/images/smallplay.png" alt="" />
                  </div>
                  <div className="overlay">
                    <div className="inner">
                      <img src="/images/bigplay.png" alt="" />
                      <div className="bottom">
                        <p>Hear From Lanre Edun</p>
                        <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                      </div>
                    </div>
                  </div>
                  <div className="botom">
                    <p>Lanre Edun</p>
                    <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                  </div>
                </div>
                <div className="box3">
                  <div className="top">
                    <img src="/images/smallplay.png" alt="" />
                  </div>
                  <div className="overlay">
                    <div className="inner">
                      <img src="/images/bigplay.png" alt="" />
                      <div className="bottom">
                        <p>Hear From Lanre Edun</p>
                        <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                      </div>
                    </div>
                  </div>
                  <div className="botom">
                    <p>Lanre Edun</p>
                    <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                  </div>
                </div>
                <div className="box4">
                  <div className="top">
                    <img src="/images/smallplay.png" alt="" />
                  </div>
                  <div className="overlay">
                    <div className="inner">
                      <img src="/images/bigplay.png" alt="" />
                      <div className="bottom">
                        <p>Hear From Lanre Edun</p>
                        <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                      </div>
                    </div>
                  </div>
                  <div className="botom">
                    <p>Lanre Edun</p>
                    <small>HEAD OF MARKETING AT BRAINS & HAMMERS</small>
                  </div>
                </div>
              </div>
              <div className="controls container mt-4">
                <div className="inner ">
                  <div>
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="giddaa">
          <div className="inner container">
            <div className="tag-inner pt-5">
              <p className="tag-text">
                Why Giddaa?
                <span className="line"></span>
              </p>
            </div>
            <div className="middle-contents">
              <p className="text-light  ">
                Too many Nigerians at home and abroad have complained about
                scams, inavailabilty of flexible payment options, how stressful,
                ambiguous, and manual the property purchase process is, we heard
                you all, <big>over 100+ of you!</big>
              </p>

              <div className="marquee container">
                <Marquee speed={25} className="maq">
                  <div className="d-flex justify-content-between gap-4 pb-4 pt-4">
                    <div className="content">
                      <big className="m-0">
                        <img
                          src="/images/cumadown.png"
                          alt=""
                          className="mb-3 me-1"
                        />
                        I was scammed, by my wife!
                        <img
                          src="/images/cumaup.png"
                          alt=""
                          className="mt-3 ms-1"
                        />
                      </big>
                      <small>Diasporan Living In Ireland</small>
                    </div>
                    <div className="content">
                      <big className="m-0">
                        <img
                          src="/images/cumadown.png"
                          alt=""
                          className="mb-3 me-1"
                        />
                        I was scammed, The form was too long!
                        <img
                          src="/images/cumaup.png"
                          alt=""
                          className="mt-3 ms-1"
                        />
                      </big>

                      <small> Government Worker In Abuja</small>
                    </div>
                    <div className="content">
                      <big className="m-0">
                        <img
                          src="/images/cumadown.png"
                          alt=""
                          className="mb-3 me-1"
                        />
                        I can’t track my repayments
                        <img
                          src="/images/cumaup.png"
                          alt=""
                          className="mt-3 ms-1"
                        />
                      </big>

                      <small>
                        ~ NGO worker who recently purchased an apartment.
                      </small>
                    </div>
                    <div className="content">
                      <big className="m-0">
                        <img
                          src="/images/cumadown.png"
                          alt=""
                          className="mb-3 me-1"
                        />
                        They sell to diasporan clients at higher prices, that’s
                        price discrimination. It is not fair.
                        <img
                          src="/images/cumaup.png"
                          alt=""
                          className="mt-3 ms-1"
                        />
                      </big>

                      <small>~ Someone In Canada</small>
                    </div>
                    <div className="content">
                      <big className="m-0">
                        <img
                          src="/images/cumadown.png"
                          alt=""
                          className="mb-3 me-1"
                        />
                        ~I was scammed, by my friend!
                        <img
                          src="/images/cumaup.png"
                          alt=""
                          className="mt-3 ms-1"
                        />
                      </big>

                      <small>Diasporan Living In Uk</small>
                    </div>
                  </div>
                </Marquee>
              </div>
              <div className="why">Here’s Why!</div>
              <div className="info">
                {whyUs.map((why) => (
                  <div key={why.id} className="whyus">
                    <img src={why.icon} alt="" />
                    <big>{why.head}</big>
                    <p>{why.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="who-we-serve">
          <div className="inner container">
            <div className="tag-inner pt-5">
              <p className="tag-text">
                Who We Serve <span className="line"></span>
              </p>
            </div>
            <div className="main-content">
              <div className="left">
                <img src="/images/plain.png" alt="" />
                <p className="h3">The Diaspora</p>
                <p>
                  Living outside Nigeria? Thinking about buying a place Back
                  Home for viists (No need for hotels, Airbnbs, or your parent’s
                  house), Investment, or is it a personal goal of yours? Or
                  maybe you see yourself spending more time back home . If any
                  of those sounds like you, we can help you along your home
                  purchase journey.
                </p>
                <div className="botom">
                  <div className="left">
                    <div className="accordion">
                      <p
                        className="a-btn"
                        onClick={() => setAccordion(!accordion)}
                      >
                        <span>
                          {accordion ? (
                            <i className="fa-solid fa-angle-up"></i>
                          ) : (
                            <i className="fa-solid fa-angle-down"></i>
                          )}
                        </span>
                        Giddaa is Free!
                      </p>
                      {accordion && (
                        <p className="accor-item">
                          We don’t charge you agency fees or commissions. It is
                          a self-service platform that is totally free. However,
                          depending on the plan you want to use to buy your
                          property, our partners, usually banks, may charge
                          fees.
                        </p>
                      )}
                    </div>
                    <div className="accordion">
                      <p
                        className="a-btn"
                        onClick={() => setAccordion1(!accordion1)}
                      >
                        <span>
                          {accordion1 ? (
                            <i className="fa-solid fa-angle-up"></i>
                          ) : (
                            <i className="fa-solid fa-angle-down"></i>
                          )}
                        </span>
                        Giddaa is Scam Proof!{" "}
                      </p>
                      {accordion1 && (
                        <p className="accor-item">
                          We don’t charge you agency fees or commissions. It is
                          a self-service platform that is totally free. However,
                          depending on the plan you want to use to buy your
                          property, our partners, usually banks, may charge
                          fees.
                        </p>
                      )}
                    </div>
                    <div className="accordion">
                      <p
                        className="a-btn"
                        onClick={() => setAccordion2(!accordion2)}
                      >
                        <span>
                          {accordion2 ? (
                            <i className="fa-solid fa-angle-up"></i>
                          ) : (
                            <i className="fa-solid fa-angle-down"></i>
                          )}
                        </span>
                        We are Responsive{" "}
                      </p>
                      {accordion2 && (
                        <p className="accor-item">
                          We don’t charge you agency fees or commissions. It is
                          a self-service platform that is totally free. However,
                          depending on the plan you want to use to buy your
                          property, our partners, usually banks, may charge
                          fees.
                        </p>
                      )}
                    </div>{" "}
                  </div>
                  <div className="right">
                    <div className="accordion">
                      <p
                        className="a-btn"
                        onClick={() => setAccordion3(!accordion3)}
                      >
                        <span>
                          {accordion3 ? (
                            <i className="fa-solid fa-angle-up"></i>
                          ) : (
                            <i className="fa-solid fa-angle-down"></i>
                          )}
                        </span>
                        We Eliminate Price Discrimination{" "}
                      </p>
                      {accordion3 && (
                        <p className="accor-item">
                          We don’t charge you agency fees or commissions. It is
                          a self-service platform that is totally free. However,
                          depending on the plan you want to use to buy your
                          property, our partners, usually banks, may charge
                          fees.
                        </p>
                      )}
                    </div>{" "}
                    <div className="accordion">
                      <p
                        className="a-btn"
                        onClick={() => setAccordion4(!accordion4)}
                      >
                        <span>
                          {accordion4 ? (
                            <i className="fa-solid fa-angle-up"></i>
                          ) : (
                            <i className="fa-solid fa-angle-down"></i>
                          )}
                        </span>
                        We Have all the Information You Need{" "}
                      </p>
                      {accordion4 && (
                        <p className="accor-item">
                          We don’t charge you agency fees or commissions. It is
                          a self-service platform that is totally free. However,
                          depending on the plan you want to use to buy your
                          property, our partners, usually banks, may charge
                          fees.
                        </p>
                      )}
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="right">
                <img src="/images/family.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="remote">
          <div className="remote-overlay">
            <div className="inner container">
              <div className="left-side">
                <img src="/images/cloud.png" alt="" className="mb-4" />
                <p className="naija">Naija Remote Workers</p>
                <p className="text-light">
                  Do you work from home? Your own Home? With Giddaa, that’s
                  possible. You don’t need to have all the money at once to buy
                  a house to become a homeowner. Leverage your job flexibility
                  working remotely and your current earning capacity to build
                  equity in a home of your own.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="accordion">
                    <p className="a-btn">
                      <span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      We Eliminate Price Discrimination{" "}
                    </p>
                  </div>
                  <div className="accordion">
                    <p className="a-btn">
                      <span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      We Have all the Information You Need{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <img src="/images/mnaa.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="private-sector">
          <div className="inner container">
            <div className="inner-left">
              <img src="/images/work-space.png" alt="" className="mb-4" />
              <p className="sector">Private Sector Workers</p>
              <p>
                Whether you’re a doctor, nurse, banker, tech bro or sis, or work
                in another industry in the private sector, Giddaa assists
                individuals looking to purchase property without straining their
                budget or breaking the bank. In the face of rising property
                prices, we empower middle-class individuals like you to achieve
                homeownership!
              </p>
              <div className="accordion">
                <p className="a-btn">
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                  We Eliminate Price Discrimination
                </p>
              </div>
            </div>
            <div className="inner-right">
              <img src="/images/office.png" alt="" />
            </div>
          </div>
        </div>
        <div className="government-worker">
          <div className="inner container">
            <div className="left">
              <img src="/images/house.png" alt="" />
              <p className="government">Government Workers</p>
              <p>
                You serve the people, and now let us serve you!. Government
                workers can effortlessly apply for a National Housing Fund (NHF)
                loan through a primary mortgage bank with Giddaa—no stress or
                connections needed. Giddaa ensures a seamless application
                process for NHF loans, and government workers can seamlessly
                explore alternative properties and plans beyond NHF.
              </p>
            </div>
            <div className="right">
              <img src="/images/people.png" alt="" />
            </div>
          </div>
        </div>
        <div className="how-it-work">
          <div className="inner container">
            <div className="tag-inner pt-5">
              <p className="tag-text">
                Who We Serve <span className="line"></span>
              </p>
            </div>
            <div className="botom">
              <div className="work-left">
                <div className="tabs">
                  <div
                    className={`tab mb-2 ${tab === 1 ? "active" : ""}`}
                    onClick={() => setTab(1)}
                  >
                    <div className="lft">
                      <span>1</span>
                      <img src="/images/tab-house.png" alt="" />
                    </div>
                    <div className="rit">
                      <p className="m-0">Find Your Dream Home</p>
                      <small>Search Through Our Proerty Listings…</small>
                    </div>
                  </div>
                  <div
                    className={`tab mb-2 ${tab === 2 ? "active" : ""}`}
                    onClick={() => setTab(2)}
                  >
                    <div className="lft">
                      <span>2</span>
                      <img src="/images/card.png" alt="" />
                    </div>
                    <div className="rit">
                      <p className="m-0">Find Your Dream Home</p>
                      <small>Search Through Our Proerty Listings…</small>
                    </div>
                  </div>
                  <div
                    className={`tab ${tab === 3 ? "active" : ""}`}
                    onClick={() => setTab(3)}
                  >
                    <div className="lft">
                      <span>3</span>
                    </div>
                    <div className="rit">
                      <p className="m-0">Find Your Dream Home</p>
                      <small>Search Through Our Proerty Listings…</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-right">
                {tab === 1 ? (
                  <div
                    className="play-value"
                    style={{ backgroundImage: "url(/images/man1.png)" }}
                  >
                    <div className="overlay">
                      <div className="in">
                        <img src="/images/bigplay.png" alt="" />
                      </div>
                    </div>
                  </div>
                ) : tab === 2 ? (
                  <div
                    className="play-value"
                    style={{ backgroundImage: "url(/images/video.png)" }}
                  >
                    <div
                      className="overlay"
                      style={{ display: tab === 2 ? "block" : "none" }}
                    >
                      <div className="in">
                        <img src="/images/bigplay.png" alt="" />
                      </div>{" "}
                    </div>
                  </div>
                ) : (
                  tab === 3 && (
                    <div
                      className="play-value"
                      style={{ backgroundImage: "url(/images/man2.png)" }}
                    >
                      <div className="overlay">
                        <div className="in">
                          <img src="/images/bigplay.png" alt="" />
                        </div>{" "}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="heading-tag">Frequently Asked Questions</div>
          <img src="/images/avater.png" alt="" />
          <p className="text-dark ">CHAT WITH KEMI</p>
          <p className="text">
            Is there something you’ll like to know ? Ask Kemi, our
            conversational chatbot
          </p>
          <button className="btn ask">Ask Kemi</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

const whyUs = [
  {
    id: 1,
    icon: "/images/Group1.png",
    head: "Stay Scam Free!",
    text: "We partner directly with trusted banks and developers, eliminating the need for intermediaries like family members or agents in property transactions.",
  },
  {
    id: 2,
    icon: "/images/Group2.png",
    head: "Streamline Your Search",
    text: "We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.",
  },
  {
    id: 3,
    icon: "/images/Group3.png",
    head: "Multiple Options",
    text: "We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.",
  },
  {
    id: 4,
    icon: "/images/Group4.png",
    head: "Find What You Can Afford",
    text: "We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.",
  },
  {
    id: 5,
    icon: "/images/Group5.png",
    head: "Apply in 5 Mins.",
    text: "On Giddaa, you can applly for a mortgage or payment plan, in under 5 minutes, ensuring a swift and efficient process that doesn’t require you to run from pillar to post to achieve.",
  },
  {
    id: 6,
    icon: "/images/Group6.png",
    head: "Manage Everthing Online",
    text: "Handle everything online – applications, payments, and repayments. Pay and track all transactions effortlessly, ensuring complete transparency and easy accessibility.",
  },
];
