import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// @ts-ignore
import data from "../data/servicesData";
import { ServiceType } from "../types/Types";

const Services = () => {
  const serviceEls = data.map((service: ServiceType) => (
    <div className="space-y-4 py-8">
      <FontAwesomeIcon
        icon={service.image}
        className="rounded-full px-8 py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white size-8 shadow-md"
      />
      <div className="space-y-2">
        <h3 className="text-gray-100 text-lg font-semibold">
          {service.service}
        </h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="bg-[#6375FF] p-16">
      <div className="text-center my-4">
        <h2 className="my-4 text-gray-100 font-bold text-4xl uppercase">
          Our Services
        </h2>
        <h3 className="text-gray-200 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </h3>
      </div>
      <div className="grid grid-cols-3 space-x-4">
        {/* <div className=" space-y-4">
          <FontAwesomeIcon
            icon={faWordpress}
            className="rounded-full px-8 py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white size-8 shadow-md"
          />
          <div className="space-y-4">
            <h3 className="text-gray-100">Lorem, ipsum dolor.</h3>
            <p className="text-gray-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem
              asperiores veritatis modi vitae magnam consectetur molestiae
              labore odit libero!
            </p>
          </div>
        </div> */}
        {serviceEls}
      </div>
    </div>
  );
};

export default Services;
