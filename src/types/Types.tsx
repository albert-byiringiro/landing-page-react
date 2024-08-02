import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type NavLinks = {
  id: string;
  title: string;
  url: string;
};

export type ServiceType = {
  id: string;
  image: IconProp;
  service: string;
  description: string;
};

export type FeatureType = {
  id: string;
  image: IconProp;
  feature: string;
  description: string;
};
