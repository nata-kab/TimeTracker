import Icon from "react-native-vector-icons/FontAwesome";

const FAIcon = ({
  iconName = "play",
  iconColor = "#ffffff",
  iconSize = 15,
}) => {
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
};
export default FAIcon;
