import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Contact (props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('product_name') || '';

  const handleChange = (event) => {
    const product_name = event.target.value;
    if (product_name) {
      setSearchParams({ product_name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>{props.message}</h2>
      <input type="text" onChange={handleChange} value={paramsValue} />
    </div>
  );
}

export default Contact;