import React from "react";
import "./home.css";
import Illustration from "../assets/Illustration.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import Logo8 from "../assets/Logo8.png";
import Logo9 from "../assets/Logo9.png";
import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";

const Home = () => {
  return (
    <div
      style={{ width: "1440px", height: "1285px" }}
      className="bg-white flex flex-col gap-10"
    >
      <div
        style={{
          width: "1440px",
          height: "599px",
          padding: "96px 144px 96px 144px",
          display: "flex",
          backgroundColor: "#F5F7FA",
        }}
      >
        <div
          style={{ width: "657px", height: "276px" }}
          className="flex flex-col gap-8 justify-center"
        >
          <div style={{ width: "657px", height: "192px" }}>
            <h1 className="font-semibold text-[64px]">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
          </div>
          <div
            style={{ width: "657px", height: "24px" }}
            className="text-base font-normal"
          >
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button
            className="bg-[#4CAF4F] rounded text-white"
            style={{
              width: "128px",
              height: "52px",
              padding: "14px 32px 14px 32px",
            }}
          >
            Register
          </button>
        </div>
        <div style={{ marginLeft: "104px", width: "391px", height: "407px" }}>
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>
      <div className="second-container">
        <div
          style={{
            width: "1110px",
            height: "76px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1110px",
              height: "44px",
              textAlign: "center",
            }}
          >
            <h2>Our Clients</h2>
          </div>
          <div
            style={{
              width: "1110px",
              height: "24px",
              textAlign: "center",
            }}
          >
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
        </div>
        <div
          className="second-container-inner-second"
          style={{
            width: "1152px",
            height: "98px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={Logo3} alt="logo3" />
          <img src={Logo4} alt="logo4" />
          <img src={Logo5} alt="logo5" />
          <img src={Logo6} alt="logo6" />
          <img src={Logo7} alt="logo7" />
          <img src={Logo8} alt="logo8" />
          <img src={Logo9} alt="logo9" />
        </div>
      </div>
      <div
        style={{
          width: "1440px",
          height: "416px",
        }}
        className="flex flex-col gap-4"
      >
        <div
          style={{
            width: "1440px",
            height: "120px",
          }}
          className="flex gap-2 flex-col justify-center items-center"
        >
          <div
            style={{
              width: "542px",
              height: "88px",
              textAlign: "center",
            }}
          >
            <h2 className="font-semibold text-4xl ">
              Manage your entire community in a single system
            </h2>
          </div>
          <div
            style={{
              width: "1440px",
              height: "24px",
              textAlign: "center",
            }}
          >
            <p className="text-base font-normal">
              Who is Nextcent suitable for?
            </p>
          </div>
        </div>
        <div
          style={{
            width: "1440px",
            height: "280px",
            padding: "0px 144px 0px 144px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "350px",
              height: "260px",
              padding: "32px 32px",
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center"
          >
            <div
              style={{
                width: "267px",
                height: "144px",
              }}
              className="flex flex-col justify-center items-center gap-4 text-center"
            >
              <img
                style={{
                  width: "65px",
                  height: "56px",
                }}
                src={Icon}
                alt="Icon"
              />
              <h3 className="font-bold text-4xl">Membership Organisations</h3>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div
            style={{
              width: "350px",
              height: "260px",
              padding: "32px 32px 32px 32px",
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center"
          >
            <img
              style={{
                width: "65px",
                height: "56px",
              }}
              src={Icon1}
              alt="Icon"
            />
            <h3 className="font-bold text-4xl">National Associations</h3>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div
            style={{
              width: "350px",
              height: "260px",
              padding: "32px 32px 32px 32px",
              boxShadow: "0px 2px 4px rgba(171, 190, 209, 0.2)",
            }}
            className="flex flex-col justify-center items-center gap-2 text-center"
          >
            <img
              style={{
                width: "65px",
                height: "56px",
              }}
              src={Icon2}
              alt="Icon"
            />
            <h3 className="font-bold text-4xl">Clubs And Groups</h3>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
