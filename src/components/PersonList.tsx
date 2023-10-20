import React from "react";
type personList = {
  names: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: personList) {
  return (
    <div>
      {props.names.map((person) => {
        return (
          <h2>
            {person.first} {person.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonList;
