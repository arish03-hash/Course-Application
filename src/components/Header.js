import React from "react";
import { Card, CardBody } from "reactstrap";

// function Header({name, title}) {
//   return (
//     <div style={{background: "yellow", padding: 20}}>
//       <h1>{title}</h1>
//       <p>This is {name}</p>
//       <p>I want to make a good project</p>
//     </div>
//   );
// }

// function Header() {
const Header = () => {
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardBody>
          <h1 className="text-center my-2">Welcome to Courses Application</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
