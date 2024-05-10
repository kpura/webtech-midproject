import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const JournalFolder = ({ onAddJournal }) => {
  const [journalTitle, setJournalTitle] = useState('');
  const [dateCreated, setDateCreated] = useState('');

  const AddJournal = () => {
    if (journalTitle.trim() === '' || dateCreated.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }
    
    onAddJournal({ journalTitle, dateCreated });
    setJournalTitle('');
    setDateCreated('');
  };

  return (
    <div style={{ backgroundColor: '#fff', width: '100%' }}>
      <Typography variant="h6" align="center" fontFamily="Poppins" gutterBottom>
        Create Journal
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Journal Title"
            size="small"
            variant="outlined"
            value={journalTitle}
            onChange={(e) => setJournalTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="date"
            label="Date Created"
            size="small"
            variant="outlined"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} align="end">
          <Button
            variant="contained"
            color="primary"
            style={{ letterSpacing: '1px', fontFamily: 'Poppins' }}
            onClick={AddJournal}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default JournalFolder;