// import React from 'react';
// import { IconButton } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';

// const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <IconButton onClick={toggleDarkMode} color="inherit">
//       {darkMode ? <Brightness7 /> : <Brightness4 />}
//     </IconButton>
//   );
// };

// export default ThemeToggle;

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={toggleDarkMode} sx={{ position: 'absolute', top: 16, right: 16 }}>
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
