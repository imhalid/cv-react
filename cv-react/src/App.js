import React from "react";
import ProfilePicture from "./images/imhalid.jpg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <img className="pp" src={ProfilePicture} alt="imhalid" />
      <Informations />
      <Footer />
    </div>
  );
}
//butons titles ve about kısımlarımı kapsayan alan
function Informations() {
  return (
    <div className="informations">
      <Titles />
      <Buttons />
      <About />
    </div>
  );
}
//sosyal medya ikonlarını kapsayan alan
function Footer() {
  return (
    <div className="footer">
      <Social />
    </div>
  );
}
//isim ve diğer bilgiler
function Titles() {
  return (
    <div className="titles">
      <h1 className="title">Halit İslam</h1>
      <h2 className="job">Software Engineer</h2>
      <h5 className="website">githublinki</h5>
    </div>
  );
}
//email ve github butonları
function Buttons() {
  return (
    <div className="buttons">
      <a href="https://github.com/" className="btn-email">
        Email
      </a>
      <a href="https://github.com/" className="btn-github">
        Github
      </a>
    </div>
  );
}

// hakkımda kısmı için iki paragraflık alan
function About() {
  return (
    <div className="about">
      <h1 className="atitle">About</h1>
      <p className="stitle">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h1 className="atitle">Interests</h1>
      <p className="stitle">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}

// hesap ikonları
function Social() {
  return (
    <div>
      <a href="https://github.com/" className="social">
        Twitter
      </a>
      <a href="https://github.com/" className="social">
        Facebook
      </a>
      <a href="https://github.com/" className="social">
        Instagram
      </a>
      <a href="https://github.com/" className="social">
        Github
      </a>
    </div>
  );
}

export default App;
