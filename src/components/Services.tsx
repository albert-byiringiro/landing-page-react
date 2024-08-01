import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCloudDownload,
  faLanguage,
  faPlane,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";

import { faWordpress } from "@fortawesome/free-brands-svg-icons";

// IImport dataset
import data from "../data/servicesData";

const iconMap = {
  "fa fa-wordpress": faWordpress,
  "fa fa-cart-arrow-down": faCartArrowDown,
  "fa fa-cloud-download": faCloudDownload,
  "fa fa-language": faLanguage,
  "fa fa-plane": faPlane,
  "fa fa-pie-chart": faPieChart,
};

const Services = () => {
  //   const serviceEls = data.map(service => (

  //   ))
  return (
    <div className="bg-[#6375FF] p-16">
      <div className="text-center ">
        <h2 className="my-4 text-gray-100 font-bold text-4xl uppercase">
          Our Services
        </h2>
        <h3 className="text-gray-200 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </h3>
      </div>
      <div className=" w-[35%]">
        <FontAwesomeIcon
          icon={faWordpress}
          className="rounded-full px-8 py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white size-8"
        />
        <div className="">
          <h3 className="text-gray-100">Lorem, ipsum dolor.</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem
            asperiores veritatis modi vitae magnam consectetur molestiae labore
            odit libero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
