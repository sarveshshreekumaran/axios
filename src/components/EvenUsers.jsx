import React from "react";
import useFetch from "./useFetch";

function EvenUsers() {
  const [data] = useFetch(
    "https://632aa8bf713d41bc8e742f8f.mockapi.io/api/v1/userapi"
  );
  return (
    <div className="container my-2">
      <div className="row row-gap-3 column-gap-3">
        {data.map((user) => {
          if (user.id % 2 === 0) {
            return (
              <div key={user.id} className="col bg-warning">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default EvenUsers;
