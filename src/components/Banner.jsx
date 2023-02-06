import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muqaddas Khan</h6>
            <h3>Front End Developer</h3>
            <p>
            I am an enthusiastic, responsible and hard-working IT person.<br />
             Being worked for different projects helped me to adopt to the <br />
             changes quickly and made me a mature team worker . I am able to<br />
              work well both in a team environment as well as using own initiative.<br />
               I am able to work well under pressure and adhere to strict deadlines<br />
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;