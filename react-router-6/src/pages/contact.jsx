import { useLocation } from "react-router-dom";

function Contact (props) {
  const location = useLocation();
  console.log(location);
  return <h2>{props.message}</h2>
}

export default Contact;