import { Box, Divider, Drawer, List, ListItem, ListItemButton,ListItemIcon, ListItemText, ListSubheader, Toolbar } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import iconList from '../../assets/img/icon_list.svg'
import { navList } from "../../constData";
import'./NavBar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function NavBar() {
    const theme = useTheme();
    
    return (
        <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box',  backgroundColor: theme.palette.primary.main },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

        
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="MuiListSubheader-root">
              <div>
                <div className="subheader-text project-name">Название проекта</div>
                <div className="subheader-text abbreviation">Аббревиатура</div>
              </div>
              <KeyboardArrowDownIcon className="arrow-icon" />
            </ListSubheader>
          }
        >
            <Divider />
            {navList.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton selected={index === 4} className="ListItem">
                  <ListItemIcon>
                   <img src={iconList} alt=''/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
    );
  }
  
export default NavBar;