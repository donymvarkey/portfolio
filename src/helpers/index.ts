import { GitHub, Icon } from "lucide-react";
import { npm } from "../assets";

interface Url {
  name: string;
  href: string;
}

function getIconByName(name: string): Icon | string {
  switch (name) {
    case "GitHub":
      return GitHub;
    case "NPM":
      return npm;
    default:
      throw new Error(`No icon found for name: ${name}`);
  }
}

export { getIconByName };
