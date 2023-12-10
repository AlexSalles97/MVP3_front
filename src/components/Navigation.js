import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function Navigation() {
    const [value, setvalue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setvalue(newValue);
                }}
            >
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />}
                    onClick={() => alert("Opção de compartilhar em seu Instagram vindo em breve.")}/>
                <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon />}
                    onClick={() => alert("Opção de compartilhar em seu WhatsApp vindo em breve.")}/>
                <BottomNavigationAction label="Email" icon={<EmailIcon />}
                    onClick={() => alert("Opção de compartilhar em seu Email vindo em breve.")}/>
            </BottomNavigation>
        </Box>
    );
}