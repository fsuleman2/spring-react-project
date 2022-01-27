import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Header() {
  return (
    <div>
        <Card className="my-1 bg-warning">
            <CardBody>
            <h1 className="text-center my-2">Welcome to Course Application</h1>
            </CardBody>
        </Card>
      
    </div>
  );
}
