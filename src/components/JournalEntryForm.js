import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const JournalEntryForm = ({ onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState('');
  const [image, setImage] = useState(null);

  const AddEntry = () => {
    if (title.trim() === '' || location.trim() === '' || description.trim() === '' || mood === '') {
      alert('Please fill in all required fields.');
      return;
    }
    
    onAddEntry({ title, location, description, mood, image });
    setTitle('');
    setLocation('');
    setDescription('');
    setMood('');
    setImage(null);
  };

  const ImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div style={{ backgroundColor: '#fff', width: '100%' }}>
      <Typography variant="h6" align="center" fontFamily="Poppins" gutterBottom >
        Create Entry
      </Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            size="small"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            size="small"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            size="small"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined" size="small" required>
            <InputLabel>Mood</InputLabel>
            <Select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              label="Mood"
            >
              <MenuItem value="Happy">Happy</MenuItem>
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem value="Sad">Sad</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={ImageChange}
            />
          </Button>
        </Grid>
        <Grid item xs={12} align="end" marginTop="40px">
          <Button variant="contained" color="primary" style={{ letterSpacing: '1px', fontFamily: 'Poppins' }} onClick={AddEntry}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default JournalEntryForm;
