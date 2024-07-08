import { PluginPage } from '@grafana/runtime'
import React, { ReactNode } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, TextareaAutosize, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function PCAPComparisonPage() {

    const [server, setServer] = React.useState<string>("");
    const [choosePcap, setChoosePcap] = React.useState<string>("");

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
                    borderBottom: '1px solid gray',
                    marginBottom: '40px'
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
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid white",
                            },
                            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid gray",
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '30px',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        minHeight: '500px',
                        position: 'relative',
                        width: '48%',
                        padding: 2,
                        overflowY: 'auto',
                        border: '1px solid gray',
                    }}
                >
                    <FormControl sx={{ m: 1, minWidth: 120, position: 'absolute', top: 16, right: 16 }}>
                        <InputLabel id="choose-pcap-label" sx={{ color: "black", }}>select option</InputLabel>
                        <Select
                            sx={{
                                color: "black",
                                "& .MuiSvgIcon-root": {
                                    color: "black",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid black",
                                },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid orange",
                                },
                            }}
                            labelId="choose-pcap-label"
                            id="choose-pcap-select"
                            value={choosePcap}
                            label="Choose Pcap"
                            autoWidth
                            onChange={(e) => { setChoosePcap(e.target.value) }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Upload">Upload</MenuItem>
                            <MenuItem value="Test File Name">Test File Name</MenuItem>
                            <MenuItem value="Session ID">Session ID</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="h5">Content 1</Typography>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        minHeight: '500px',
                        position: 'relative',
                        width: '48%',
                        padding: 2,
                        overflowY: 'auto',
                        border: '1px solid gray',
                    }}
                >
                    <FormControl sx={{ m: 1, minWidth: 120, position: 'absolute', top: 16, right: 16 }}>
                        <InputLabel id="choose-pcap-label" sx={{ color: "black", }}>select option</InputLabel>
                        <Select
                            sx={{
                                color: "black",
                                "& .MuiSvgIcon-root": {
                                    color: "black",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid black",
                                },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid orange",
                                },
                            }}
                            labelId="choose-pcap-label"
                            id="choose-pcap-select"
                            value={choosePcap}
                            label="Choose Pcap"
                            autoWidth
                            onChange={(e) => { setChoosePcap(e.target.value) }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Upload">Upload</MenuItem>
                            <MenuItem value="Test File Name">Test File Name</MenuItem>
                            <MenuItem value="Session ID">Session ID</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="h5">Content 1</Typography>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
                </Paper>
            </Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item marginLeft={20}>
                    <Typography variant="h6">PCAPCC</Typography>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="server-select-label" sx={{ color: "white", }}>Server</InputLabel>
                        <Select
                            sx={{
                                color: "white",
                                "& .MuiSvgIcon-root": {
                                    color: "white",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid white",
                                },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "1px solid gray",
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
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="server-select-label" sx={{ color: "white", }}>Server</InputLabel>
                            <Select
                                sx={{
                                    color: "white",
                                    "& .MuiSvgIcon-root": {
                                        color: "white",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "1px solid white",
                                    },
                                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        border: "1px solid gray",
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
                        <IconButton sx={{ marginLeft: 1 }}>
                            <EditIcon color='primary' />
                        </IconButton>
                        <IconButton>
                            <CloudUploadIcon color='primary' />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item>
                    <TextField label="Comparison Name" variant="outlined" sx={{ minWidth: 200 }} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <Button variant="contained">
                        Compare
                    </Button>
                </Grid>
            </Grid>
        </PluginPage>
    )
}

export default PCAPComparisonPage