import React from "react";
import ProfileCard from "../animations/ProfileCard";

const Me = () => {
  return (
    <div className="w-full flex mx-auto p-10 justify-center gap-[200px] ">
      {/* card section */}
      <ProfileCard
        className="w-80 h-96"
        name="Aok Sothatt"
        title="Student Developer"
        handle="T20"
        status="Online"
        contactText="Contact Me"
        avatarUrl="null"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
      {/* Personal Detail section */}
      <div className="w-1/2 ">
        <div>
          <h1 className="text-3xl">ABOUT ME</h1>
          <br />
          <p className="w-[90%]">
            I am a computer science student who is motivated and eager to learn.
            I am looking for an opportunity to gain practical experience and
            improve my technical skills. I am responsible, hardworking, and able
            to work well in a team.
          </p>
        </div>
        <br />
        <div>
          <h1 className="text-3xl">PERSONAL DETAIL</h1>
          <br />
          <p>
            <b>Age:</b> 20
          </p>
          <p>
            <b>Gender:</b> Male
          </p>
          <p>
            <b>Phone:</b> 012669422
          </p>
          <p>
            <b>Email:</b> aoksohat@gmail.com
          </p>
        </div>
        <br />
        <div>
          <h1 className="text-3xl">Education Background</h1>
          <br />
          <p>
            <b>2025-Present :</b> Computer Science, Royal University of Phnom
            Penh
          </p>
          <p>
            <b>2022-2024 :</b> High School, Bethel High School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
