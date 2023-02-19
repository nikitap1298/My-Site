import React from "react"
import myPhoto from "../../images/my_photo.png"

const Introduction = () => {
  return (
    <div className="introduction-div">
      <div className="introduction-text-and-links-div">
        <div className="introduction-text-div">
          <h1 className="h1-introduction">Hello I'm Nikita</h1>
          <p className="p-introduction">
            I'm a software developer and photographer in Germany
          </p>
        </div>
        <div className="introduction-links-div">
          <a
            className="introduction-link"
            href="https://github.com/nikitap1298"
          >
            GH
          </a>
          <a
            className="introduction-link"
            href="https://www.linkedin.com/in/nikita-pishchugin-b26065241/"
          >
            LI
          </a>
          <a
            className="introduction-link"
            href="https://unsplash.com/@nikita_pishchugin"
          >
            UN
          </a>
        </div>
      </div>
      <img className="introduction-photo" src={myPhoto} alt="myPicture" />
    </div>
  )
}

export default Introduction
