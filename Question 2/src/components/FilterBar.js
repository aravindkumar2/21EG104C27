import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
`;

const FilterBar = ({ filters, setFilters, setSortBy, setOrder }) => {
  const validCategories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  const validCompanies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

  return (
    <FilterContainer>
      <Select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        {validCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      <Select
        value={filters.company}
        onChange={(e) => setFilters({ ...filters, company: e.target.value })}
      >
        <option value="">All Companies</option>
        {validCompanies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </Select>

      <select
        value={filters.rating}
        onChange={(e) =>
          setFilters({ ...filters, rating: Number(e.target.value) })
        }
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4 Stars & Up</option>
        <option value={3}>3 Stars & Up</option>
      </select>

      <Input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: Number(e.target.value) })
        }
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: Number(e.target.value) })
        }
      />

      <Select onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
        <option value="discount">Sort by Discount</option>
      </Select>

      <Select onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterBar;
