import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

console.log(faCoffee);
const Services = () => {
  return (
    <div className="bg-green-500 p-16">
      <div className="text-center">
        <h2 className="my-4 text-gray-100 font-bold text-4xl uppercase">
          Our Services
        </h2>
        <h3 className="text-gray-200 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </h3>
      </div>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};

export default Services;
