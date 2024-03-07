import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="whatsapp">
          <img src="/images/avater-group.png" alt="" />
          <div className="whatsapp-inner">
            <img src="/images/whatsapp.png" alt="" />
            <p className="m-0">Join Our WhatsApp Community</p>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="middle container">
          <div>
            <p>Developers</p>
            <small>Join as a Developer</small>
          </div>
          <div>
            <p>Banks</p>
            <small>Join as a Bank</small>
          </div>
          <div>
            <p>Legal</p>
            <small>Privacy Policy</small>
            <small>Terms & Conditions</small>
          </div>
          <div>
            <p>Contact Us</p>
            <small>info@giddaa.com</small>
            <small>WhatsApp</small>
            <p>Book a Meeting</p>
            <p>+234 809 762 1791</p>
          </div>
          <div>
            <p>Site Navigation</p>
            <small>Properties</small>
            <small>Developers</small>
            <small>Banks</small>
          </div>
        </div>
        <div className="icons">
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/twitter.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/tiktok.png" alt="" />
          <img src="/images/facebook.png" alt="" />
        </div>
        <hr />
        <p className=" text-light">PROPERTY OF GIDDAA INC.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  .footer {
    background: #335f32;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 3rem; */
    padding-top: 2.5rem;
    .whatsapp {
      display: flex;
      padding: 1rem 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f3faf2 0% 0% no-repeat padding-box;
      border: 2px solid #335f32;
      border-radius: 100px;
      &-inner {
        display: flex;
        align-items: center;
        gap: 1rem;
        .m-0 {
          font-family: Millik;
          color: #335f32;
          font-size: 20px;
        }
        img {
          width: 3rem;
        }
        i {
          color: #335f32;
        }
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        .m-0 {
          font-size: 10px;
        }
        img {
          width: 5rem;
        }
        &-inner {
          img {
            width: 2rem;
            gap: 2px;
          }
        }
      }
    }
    .middle {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      div {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          color: white;
        }
        small {
          color: white;
        }
      }
      @media screen and (max-width: 920px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .icons {
      margin-top: 3rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    hr {
      width: 100%;
      border: 1px solid #f0f0f0;
      margin: 5px 0;
    }
  }
`;
