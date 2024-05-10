import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const moodSuggestions = {
  Sad: [
    "Reach out to a friend or loved one for support.",
    "Practice mindfulness or meditation.",
    "Engage in activities that bring you joy.",
  ],
};

const moodInsights = {
  Sad: "Feeling down? Remember, it's okay not to be okay. Reach out to someone you trust for support and engage in activities that bring you joy.",
};

const SystemInsights = ({ selectedMood }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [insight, setInsight] = useState("");

  useEffect(() => {
    setSuggestions(moodSuggestions[selectedMood] || []);
    setInsight(moodInsights[selectedMood] || "");
  }, [selectedMood]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} key="suggestions">
        {suggestions.map((suggestion, index) => (
          <Card key={index} style={{ marginBottom: '10px', backgroundColor: '#FFCBCB', borderRadius: '20px' }}>
            <CardContent>
              <Typography style={{ fontFamily: 'Poppins' }}>
                <EmojiObjectsIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} /> {suggestion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} key="insight">
        <Card style={{ borderRadius: '20px' }}>
          <CardContent>
            <Typography style={{ fontFamily: 'Poppins' }}>
              {insight}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SystemInsights;
