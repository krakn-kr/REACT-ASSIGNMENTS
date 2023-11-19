<<<<<<< HEAD
const About = () => {
  return (
    <>
      <h1>About page</h1>
      <h2>About page</h2>
    </>
  );
};
=======
import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}
>>>>>>> f718358 (Ashok)
export default About;
