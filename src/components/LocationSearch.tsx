import { useState } from "react";
import styled from "styled-components";
import Icon from "../assets/icons";
// import { IoLocationSharp } from "react-icons/io5";

const cities = [
  "Chennai, Tamil Nadu, India",
  "Bengaluru, Karnataka, India",
  "Hyderabad, Telangana, India",
  "Mumbai, Maharashtra, India",
  "Delhi, India",
  "Kolkata, West Bengal, India",
];

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  position: relative;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border: 1.5px solid #c8c8c8;
  border-radius: 50px;
`;

const Input = styled.input`
  flex: 1;
  font-size: 16px;
  border: none;
  outline: none;
`;

const Dropdown = styled.div`
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #f3f3f3;
  }
`;

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setFiltered([]);
      return;
    }

    const list = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(list);
  };

  const handleSelect = (city: string) => {
    setQuery(city);
    setFiltered([]);
  };

  return (
    <Wrapper>
      <SearchBar>
        <Icon name="google" />
        {/* <Icon>
          <IoLocationSharp />
        </Icon> */}

        <Input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={handleChange}
        />
      </SearchBar>

      {filtered.length > 0 && (
        <Dropdown>
          {filtered.map((city, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(city)}>
              {city}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}
