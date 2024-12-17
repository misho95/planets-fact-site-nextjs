export const pickColor = (name: string, planet: boolean) => {
  switch (name.toLocaleLowerCase()) {
    case "mercury":
      return planet ? "#DEF4FC" : "#419EBB";
    case "venus":
      return planet ? "#F7CC7F" : "#EDA249";
    case "earth":
      return planet ? "#545BFE" : "#6D2ED5";
    case "mars":
      return planet ? "#FF6A45" : "#D14C32";
    case "jupiter":
      return planet ? "#ECAD7A" : "#D83A34";
    case "saturn":
      return planet ? "#FCCB6B" : "#CD5120";
    case "uranus":
      return planet ? "#65F0D5" : "#1EC1A2";
    case "neptune":
      return planet ? "#497EFA" : "#2D68F0";
    default:
      return "#fff";
  }
};
