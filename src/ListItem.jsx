import React from "react";

const ListItem = ({ list }) => {
  const { name, username, email, address, phone, website, company } = list;
  const { street, suite, city, zipcode } = address;
  const { catchPhrase, bs } = company;
  return (
    <div className="card">
      <h1 style={{ color: "rgb(244, 23, 167)" }}> {name} </h1>
      <p> {username} </p>
      <p> {email} </p>
      <p> {street} </p>
      <p> {suite} </p>
      <p> {city} </p>
      <p> {zipcode} </p>
      <p> {phone} </p>
      <p> {website} </p>
      <p> {company.name} </p>
      <p> {catchPhrase} </p>
      <p> {bs} </p>
    </div>
  );
};

export default ListItem;