import { PluginPage } from '@grafana/runtime'
import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';


function PCAPComparisonPage() {

    const [server, setServer] = React.useState<string>("");

    const handleServerChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
        setServer(event.target.value)
    }

    return (
        <PluginPage>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                <Typography variant="h5">PCAPCC</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="server-select-label" sx={{ color: "white", }}>Server</InputLabel>
                    <Select
                        sx={{
                            color: "white",
                            "& .MuiSvgIcon-root": {
                                color: "white",
                            },
                        }}
                        labelId="server-select-label"
                        id="server-select"
                        value={server}
                        label="Server"
                        autoWidth
                        onChange={(e) => { setServer(e.target.value) }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="DCWLab">DCWLab</MenuItem>
                        <MenuItem value="DCW2">DCW2</MenuItem>
                        <MenuItem value="DCW3">DCW3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </PluginPage>
    )
}

export default PCAPComparisonPage