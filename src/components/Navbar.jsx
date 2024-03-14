import React from "react";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div
            style={{ height: "84px", width: "1440px" }}
            className="bg-[#F5F7FA] flex justify-around items-center"
          >
            <div>
              <img
                style={{
                  height: "24px",
                  width: "154.49px",
                }}
                src={Logo}
                alt="logo"
              />
            </div>
            <div
              style={{
                width: "588px",
                Height: "24px",
              }}
              className="flex font-normal text-black text-base justify-between items-center"
            >
              <a href="#">Home</a>
              <a href="#">Service</a>
              <a href="#">Feature</a>
              <a href="#">product</a>
              <a href="#">Testimonial</a>
              <a href="#">FAQ</a>
            </div>
            <div
              className="flex justify-between align-center gap-3.5"
              style={{
                Width: "182px",
                Height: "40px",
              }}
            >
              <button
                className="text-[#4CAF4F] font-medium rounded-md gap-2.5"
                style={{
                  width: "77px",
                  Height: "40px",
                  padding: "10px 20px 10px 20px",
                }}
              >
                Login
              </button>
              <button
                className="bg-[#4CAF4F] text-white font-medium rounded-md gap-2.5"
                style={{
                  width: "91px",
                  Height: "40px",
                  padding: "10px 20px 10px 20px",
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
