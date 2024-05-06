import React from "react";
import BannerImage from "../../assets/admoff.jpg";
import styled from "styled-components";
import { GiChicken } from "react-icons/gi";

const BannerSection = styled.section`
  position: relative;
  height: 100vh;
`;
const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
`;

const BlurImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${
    "" /* opacity: 0;
  animation: fadeInOut 20s infinite;
  animation-timing-function: ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    ,
    100% {
      opacity: 1;
    }
  } */
  }
`;
const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerSection>
      <BlurImage src={BannerImage} alt="Poultry Image"></BlurImage>
      <GradientOverlay />
      <BannerContent>
        <div className="font-[Grandstander]">
          <div className="">
            <h1 className="text-9xl text-[#fff] mb-5">Poultry Farming</h1>
            <p className="text-[#ccc] w-1/2 m-auto text-lg">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="bg-[#0e584b] p-2 rounded-lg mt-5 text-lg hover:bg-[#167d65]">
              <div className="flex items-center justify-center gap-2">
                <span>
                  <GiChicken />
                </span>
                <span>Discover More</span>
              </div>
            </button>
          </div>
        </div>
      </BannerContent>
    </BannerSection>
  );
};

export default Banner;
