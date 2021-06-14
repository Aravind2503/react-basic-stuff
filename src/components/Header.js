import PropTypes from "prop-types"; // using impt snippet
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "default :)",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// adding CSS styling though JS -- use style = {headingStyle}
// const headingStyle = {
//     color:'red',
//     backgroundColor : 'black'
// }

export default Header;
