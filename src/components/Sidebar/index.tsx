import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => () => {
    setIsOpen(open);
  };

  return (
    <div>
      <button onClick={toggleDrawer(true)}>Open Sidebar</button>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Item 1Item 1Item 1" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Item 2Item 2Item 2" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Item 3Item 3Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
