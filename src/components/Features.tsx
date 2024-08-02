import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeatureType } from "../types/Types";
import data from "../data/featuresData.js";

const Features = () => {
  const featureEls = data.map((feature: FeatureType) => (
    <div className="space-y-8 py-8  text-center">
      <FontAwesomeIcon
        icon={feature.image}
        className="rounded-full px-8 py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white size-8 shadow-md"
      />
      <div className="space-y-2">
        <h3 className="text-gray-700 text-lg font-semibold">
          {feature.feature}
        </h3>
        <p className="text-gray-500 text-pretty text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="bg-[#F6F6F6]">
      <h1 className="my-4 text-gray-900 font-bold text-4xl uppercase text-center">
        Features
      </h1>
      <div className="grid grid-cols-4 space-x-4 pt-16">{featureEls}</div>
    </div>
  );
};

export default Features;
