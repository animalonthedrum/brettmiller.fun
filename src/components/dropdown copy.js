import React, { useEffect, useState, useRef } from "react";
import { FaAngleDown } from 'react-icons/fa';



const Dropdown = ({ value, pages, title = "Dropdown" }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = selectedValue => {
    // onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <ul ref={node} className="dropdown"
           style={{
            position: `relative`
          }}>
      <span className={`dropdown-toggler ${open ? "open" : ""}`} onClick={e => setOpen(!open)}>
        {title}
        <FaAngleDown size={16}/>
      </span>
      {open && (
        <ul className="dropdown-menu" 
        style={{
            position: `absolute`
          }}>
          {pages.map((pages, index) => (
            <li key={index} className="dropdown-menu-item" onClick={e => handleChange(pages)}>
              {pages}
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default Dropdown;