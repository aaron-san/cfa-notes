import React from "react";
import Link from "next/link"

const About = () => {
  return (
    <div>
      <h1>About Free Analyst Notes</h1>
      <p>
        Free Analyst Notes is a free resource for anyone interested in learning
        more about financial, accounting, and economic topics. We provide broad
        conceptual summaries of information covered on CFA exam and CAIA exams.
        The information is <strong>not</strong> all-inclusive and there is no
        guarantee that the information will be covered on current or future
        exams. this information serves as a supplemental resource to learning
        finance and reviewing concepts for financial exams in general.
      </p>
      <h1>About the Creator of Free Analyst Notes</h1>
      Aaron Hardy is the creator and manager of Free Analyst Notes content. Please see Aaron's <Link href="https://linkedin.com/in/aaron-hardy-651b2410">LinkedIn Profile</Link> for further details.
    </div>
  );
};

export default About;
