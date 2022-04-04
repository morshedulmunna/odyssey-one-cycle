import React from "react";
import "./Blog.css";
import contextAPi from "../asset/context-api.png";
import semanticTag from "../asset/HTML5-Semantic-Elements.jpg";

const Blog = () => {
  return (
    <div>
      <div className="wrapper_blog">
        <div className="container blog ">
          <div className="context_Api">
            <img src={contextAPi} alt="" />
            <div className="blog_text">
              <span>Published by 04 April 2022</span>
              <h1>What is Context API ? - React Router Hook Context API ?</h1>
              <p>
                the Context API helps to avoid prop drilling in our React
                application. if you don't know about the term prop drilling. So
                let's understand that first. ________________
                <br />
                <br />
                In React, we can pass the data only in a single direction, i.e.
                from top to down (parent to child) via props. Prop drilling is a
                process where we need to pass down the props at each level in a
                deeply nested component tree so that we can access them in the
                component at the lowest level.
              </p>
            </div>
          </div>
          <p>
            <b>Context in React</b> just provides a way to pass the data
            directly to the required components rather than passing them through
            every level of the component tree. So using <b>React Context</b>, we
            don't have to pass the props unnecessarily to all those intermediate
            components that do not need the props.
          </p>

          <div className="semantic_tag">
            <span>Published by 04 April 2022</span>
            <h1>What Is Semantic HTML Tag ?</h1>
            <div className="sementic_content">
              <img src={semanticTag} alt="" />
              <p>
                Semantic HTML5 addresses this shortcoming by defining specific
                tags to indicate clearly what role is played by the content
                those tags contain.For example, <b> header, Footer, article </b>{" "}
                are considered semantic elements as they clearly describe their
                purpose and the type of content they should enclose.
                <br />
                <br />
                Semantic tags also help search engines to parse the webpage
                correctly and find accurate information. Thus, helping search
                engines to correctly index the page.
                <br />
                <br />
                <h2>Now Some Example For Semantic Tag in HTML5:</h2>
                <ol>
                  <li>Section</li>
                  <li>Article</li>
                  <li>Main</li>
                  <li>Aside</li>
                  <li>Header</li>
                  <li>Nav</li>
                  <li>Footer</li>
                  <li>Figure & Figcaption</li>
                  <li>Heading</li>
                  <li>Strong & em</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
