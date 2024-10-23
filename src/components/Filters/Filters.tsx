import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import styles from "./Filters.module.scss";
import { FiltersProps } from "./FiltersProps";

export const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: "",
    location: "",
    type: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.imgContainer}>
        <h2>Let’s Find Your Next Home</h2>
        <div className={styles.fieldsWrapper}>
          <CustomInput
            type="text"
            name="name"
            value={filters.name}
            label=""
            placeholder="Hostel Name"
            onChange={handleInputChange}
          />
          <CustomInput
            type="text"
            name="location"
            value={filters.location}
            label=""
            placeholder="Location"
            onChange={handleInputChange}
          />
          <select
            name="type"
            value={filters.type}
            onChange={handleInputChange}
            className={styles.customSelect}
          >
            <option value="">Select Type</option>
            <option value="Student">Student</option>
            <option value="Staff">Staff</option>
            <option value="Vistor">Vistor</option>
          </select>
        </div>
      </div>
    </div>
  );
};
