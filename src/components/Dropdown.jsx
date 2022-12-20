import { useState } from "react";

const Dropdown = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded((val) => !val);
  };

  return (
    <div className="item">
      {item.children ? (
        <p onClick={toggleDropdown}>
          {item.name} {isExpanded ? <span>-</span> : <span>+</span>}
        </p>
      ) : (
        <p>{item.name}</p>
      )}

      {item.children && (
        <div
          className={`dropdown ${isExpanded ? "active" : ""}`}
          style={{ paddingLeft: "1.2rem" }}
        >
          {item.children.map((dropdownItem, index) => {
            return <Dropdown key={index} item={dropdownItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
