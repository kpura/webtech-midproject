import React from 'react';
import { Card, Typography, IconButton, Tooltip } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const JournalView = ({ journal, onClick }) => {
  return (
    <div onClick={() => onClick(journal)} style={{ cursor: 'pointer' }}>
      <Card
        style={{
          marginBottom: '5px',
          backgroundColor: '#FFC470',
          borderRadius: '8px 35px 8px 8px',
          height: '180px',
          width: '250px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'left',
          padding: '10px',
        }}
      >
        <div style={{ flexGrow: 1, marginLeft: '10px' }}>
          <FolderIcon style={{ fontSize: '30px', color: '#7E7E7E', top: '50%', left: '50%', transform: 'translate(-10%, -10%)' }} />
          <Typography variant="h6" component="h6" color="#3E3E3E" fontWeight="bold" fontFamily="Poppins" textTransform="none" >
            {journal.journalTitle}
          </Typography>
          <Typography variant="body2" color="#3E3E3E" fontFamily="Poppins">
            {journal.dateCreated}
          </Typography>
          <div style={{ marginTop: '10px' }}>
            <Tooltip title="Edit" arrow>
              <IconButton color="primary" aria-label="edit" >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow> 
              <IconButton color="error" aria-label="delete" >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default JournalView;
