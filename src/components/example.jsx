import React from "react";

export default function Example() {
  return (
    <div id="example">
      <h2>Example</h2>
      <div className="form">
        {"<"}
        <span className="pink">form</span>
        <span className="yellow"> action</span>
        {'="'}
        <span className="green">https://api.com</span>
        {'"'} <span className="yellow">method</span>
        {'="'}
        <span className="green">POST</span>
        {'"'}
        {" >"}
        <br />{" "}
        <Input type="text" name="access_key">
          value{" "}
          <span className="white">
            {'="'}
            <span className="green">YOUR_ACCESS_KEY</span>
            {'"'}
          </span>{" "}
          hidden{" "}
        </Input>
        <br /> <Input type="email" name="to" />
        <br /> <Input type="text" name="body" />
        <br /> <Input type="text" name="subject" />
        <br /> {"</"}
        <span className="pink">form</span>
        {" >"}
      </div>
    </div>
  );
}

function Input({ type, name, children }) {
  return (
    <>
      &nbsp;&nbsp;&nbsp;{"<"}
      <span className="pink">input </span>
      <span className="yellow">type</span>
      {'="'}
      <span className="green">{type}</span>
      {'" '}
      <span className="yellow"> name</span>
      {'="'}
      <span className="green">{name}</span>
      {'" '}
      <span className="yellow">
        {children}
        required
      </span>
      {" />"}
    </>
  );
}
