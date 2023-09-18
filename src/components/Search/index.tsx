import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('opcao1');

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value);
  };

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Select
        label="Opção"
        variant="outlined"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <MenuItem value="opcao1">Opção 1</MenuItem>
        <MenuItem value="opcao2">Opção 2</MenuItem>
        <MenuItem value="opcao3">Opção 3</MenuItem>
      </Select>
      <TextField
        label="Pesquisar"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
