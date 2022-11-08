import React from "react";
import images from "../About/pexels-stefan-stefancik-91227.jpg";
const About = () => {
  return (
    <div>
        <h1 className="text-3xl text-center">About me</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2  mt-10 ">
        
      <div className="min-h-5">
        <img src={images} alt="" />
      </div>
      <div className=" p-5 mt-10">
        <h1 className=" text-3xl">I am a photographer</h1>
        <p className="text-xl  ">
          {" "}
          That's because it's all about real people and real moments. In
          lifestyle photography, it's important to shoot candid photos that can
          tell a story.{" "}
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
