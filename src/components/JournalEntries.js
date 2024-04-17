import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const JournalEntry = ({ entry, onClick }) => {
  return (
    <Card style={{ marginBottom: '5px', backgroundColor: '#9195F6', borderRadius: '20px', height: '100px' }} onClick={() => onClick(entry)}>
        <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h5" component="h5" color="white" fontWeight="bold" fontFamily="Poppins" marginBottom= "5px" >
            {entry.title}
          </Typography>
          <Typography variant="body2" color="white" fontFamily="Poppins">
            Mood: {entry.mood}
          </Typography>
        </CardContent>
    </Card>
  );
}

export default JournalEntry;
