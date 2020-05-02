import React from "react";

function MainPage(props) {
  return (
    <div className="main-page">
      <Header
        title="SERVICES"
        description="Our vision is simple. We want to create websites and applications with both high quality
       design and easy-to-access content. The finished product will be totally unique and represent awesomeness."
      ></Header>
      <Container></Container>
    </div>
  );
}

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
    </div>
  );
}

function Container(props) {
  return (
    <div className="container">
      <div className="column">
        <Circles circleNum="circle-1" icon={"fas fa-laptop-code"}></Circles>
        <TextElements
          textNum="text-1"
          text="USER INTERFACE DESIGN"
          subText1="Wireframing"
          subText2="Prototyping"
          subText3="Usability Testing"
        ></TextElements>
      </div>
      <div className="column">
        <Circles circleNum="circle-2" icon={"fas fa-pencil-alt"}></Circles>
        <TextElements
          textNum="text-2"
          text="CONCEPTS AND IDEAS"
          subText1="Conceptualization"
          subText2="Digital Branding"
          subText3="Product Strategy"
        ></TextElements>
      </div>
      <div className="column">
        <Circles circleNum="circle-3" icon={"fas fa-envelope-open"}></Circles>
        <TextElements
          textNum="text-3"
          text="DESIGN AND BRANDING"
          subText1="Interaction Design"
          subText2="Graphic Design"
          subText3="Identity Design"
        ></TextElements>
      </div>
    </div>
  );
}
function Circles(props) {
  return (
    <div className="circle-container">
      <div className={`${props.circleNum} circles`}>
        <i className={`${props.icon} main-fas`}></i>
      </div>
    </div>
  );
}

function TextElements(props) {
  return (
    <div>
      <div className={`${props.textNum} text`}>{props.text}</div>
      <div className="sub">
        <div className="sub-text">{props.subText1}</div>
        <div className="sub-text">{props.subText2}</div>
        <div className="sub-text">{props.subText3}</div>
      </div>
    </div>
  );
}

export default MainPage;
