// import React, { useState } from 'react';
// import { TextField, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSearch = () => {
//     if (city.trim()) {
//       onSearch(city);
//       setCity('');
//     }
//   };

//   return (
//     <div>
//       <TextField
//         label="Enter city"
//         variant="outlined"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//       />
//       <IconButton onClick={handleSearch}>
//         <SearchIcon />
//       </IconButton>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import { TextField, IconButton, Box, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

const SearchBar = ({ onSearch, onRefresh }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <Paper elevation={4} sx={{ display: 'flex', p: 1, borderRadius: 3, backgroundColor: '#e3f2fd' }}>
      <TextField
        variant="outlined"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        sx={{ flexGrow: 1, backgroundColor: 'white', borderRadius: 1 }}
      />
      <IconButton onClick={handleSearch} sx={{ ml: 1, color: '#1976d2' }}>
        <SearchIcon />
      </IconButton>
      <IconButton onClick={onRefresh} sx={{ ml: 1, color: '#388e3c' }}>
        <RefreshIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
