import {Box, colors, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData"
import { AdminPanelSettingsOutlinedIcon } from '@mui/icons-material/AdminPanelSettingsOutlined';
import { LockOpenOutlinedIcon } from '@mui/icons-material/LockOpenOutlined';
import { SecurityOutlinedIcon } from '@mui/icons-material/SecurityOutlinedIcon';
import Header from "../../components/Header"

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        { field : 'id', hederName: "ID"}, 
        {field: "name",
             headerNme: "Name",
              flex: 1,
               cellClassName: "name-column--cell"},
        {}]

    return (
        <Box>
            <Header title="TEAM" subtitle="Managing the team members"></Header>
            <Box>
                <DataGrid 
                rows={mockDataTeam}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;