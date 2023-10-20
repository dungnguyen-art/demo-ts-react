import React from "react";
type person = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: person) {
  return (
    <div>
      {props.name.first}{props.name.last}
    </div>
  );
}

export default Person;
