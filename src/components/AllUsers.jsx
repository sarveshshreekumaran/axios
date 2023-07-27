import React from "react";
import useFetch from "./useFetch";

function AllUsers() {
  const [data] = useFetch(
    "https://632aa8bf713d41bc8e742f8f.mockapi.io/api/v1/userapi"
  );

  return (
    <div className="container">
      <div className="row row-gap-3 column-gap-3">
        {data.map((user) => {
          return (
            <div key={user.id} className="col bg-body-secondary">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllUsers;
