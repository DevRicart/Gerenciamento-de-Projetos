import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer";
import '../App.css'

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open); 
  };

  return (
    <Box className="Header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="MenuIcon"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)} 
          >
            <MenuIcon />
          </IconButton>
          <AnchorTemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
