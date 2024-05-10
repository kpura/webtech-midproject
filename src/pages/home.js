import React, { useState } from 'react';
import { Container, Typography, BottomNavigation, BottomNavigationAction, Modal, Grid, Box, IconButton, Tooltip } from '@mui/material'; 
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddIcon from '@mui/icons-material/Add';
import PlaceIcon from '@mui/icons-material/Place';
import JournalEntryForm from '../components/JournalEntryForm';
import JournalEntry from '../components/JournalEntries';
import JournalFolder from '../components/JournalFolder';
import JournalView from '../components/JournalView';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MapLocations from '../components/MapLocations'; 
import Profile from '../components/Profile'; 
import SystemInsights from '../components/SystemInsights';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [entries, setEntries] = useState([]);
  const [journals, setJournals] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [addButtonStyle, setAddButtonStyle] = useState({
    position: 'fixed',
    bottom: '50%',
    right: '50%',
    transform: 'translate(50%, 50%)',
    width: '100px',
    height: '100px',
    backgroundColor: '#008DDA',
    borderRadius: '50%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  });
  const [journalTypes, setJournalTypes] = useState([]); 
  const [selectedMood, setSelectedMood] = useState('Sad');

  const AddEntry = (entry) => {
    setEntries(prevEntries => [...prevEntries, entry]);
    if (!locations.includes(entry.location)) {
      setLocations(prevLocations => [...prevLocations, entry.location]);
    }
    setIsFormModalOpen(false);
    setAddButtonStyle({
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      margin: '0px 0px 60px 60px',
      backgroundColor: '#008DDA',
      borderRadius: '50%',  
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    });
    setShowSuccessAlert(true);
  };

  const AddJournal = (journalEntry) => {
    setJournals(prevJournals => [...prevJournals, journalEntry]);
    if (!journalTypes.includes(journalEntry.type)) {
      setJournalTypes(prevTypes => [...prevTypes, journalEntry.type]);
    }
    setIsFormModalOpen(false);
    setAddButtonStyle({
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      margin: '0px 0px 60px 60px',
      backgroundColor: '#008DDA',
      borderRadius: '50%',  
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    });
    setShowSuccessAlert(true);
  };

  const TabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const MyJournalEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const MyJournal = (journal) => {
    setSelectedJournal(journal);
    setSelectedTab('entry');
  };
  

  const CloseModalView = () => {
    setSelectedEntry(null);
  };

  const EditEntry = (entry) => {
    // No functionality muna ang edit
  };

  const DeleteEntry = (entry) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this journal entry?");
    if (confirmDelete) {
      const updatedEntries = entries.filter(item => item !== entry);
      setEntries(updatedEntries);
      const updatedLocations = locations.filter(location => location !== entry.location);
      setLocations(updatedLocations);
      if (selectedEntry === entry) {
        setSelectedEntry(null);
      }
      setShowSuccessAlert(true);
    }
  };

  const OpenFormModal = () => {
    setIsFormModalOpen(true);
  };

  const CloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '50px' }}>
      {selectedTab === 'home' && (
        <>
          <br></br>
          <Box
            sx={{
              backgroundColor: '#5356FF',
              backgroundImage: 'url(/cover.jpg)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: 'auto',
              height: '250px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ color: '#fff' }}>
              <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'Poppins', letterSpacing: '1px' }}>WELCOME TO D JOURNAL</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Poppins' }}>Lauren</p>
            </div>
            <div>
              <Avatar alt="Profile Icon" src="user.png" />
            </div>
          </div>
          <br></br>
          <br></br>
          <Typography variant="h4" align="center" style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins' }}>
            How are you feeling?
          </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: '20px auto',
              display: 'flex',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img src="happy.png" style={{ width: '60%', borderRadius: '10px' }} />
                <p style={{ fontSize: '18px', fontFamily: 'Poppins', marginTop: '10px' }}>Happy</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img src="neutral.png" style={{ width: '60%', borderRadius: '10px' }} />
                <p style={{ fontSize: '18px', fontFamily: 'Poppins', marginTop: '10px' }}>Neutral</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img src="sad.png" style={{ width: '60%', borderRadius: '10px' }} />
                <p style={{ fontSize: '18px', fontFamily: 'Poppins', marginTop: '10px' }}>Sad</p>
              </div>
            </div>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: '20px auto',
            }}
          >
            <SystemInsights selectedMood={selectedMood} />
          </Box>
          <Box
            sx={{
              backgroundColor: '#E1AFD1',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: '20px auto',
            }}
          >
            <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Poppins', marginBottom: '10px' }}>How do you feel about traveling today?</p>
            <p style={{ fontSize: '16px', fontFamily: 'Poppins', lineHeight: '1.5' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: '20px auto',
            }}
          >
            <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Poppins', marginBottom: '10px' }}>For You</p>
            <p style={{ fontSize: '16px', fontFamily: 'Poppins', lineHeight: '1.5' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut purus quis nisi elementum accumsan. Nulla facilisi. Curabitur vel commodo quam. Phasellus consectetur placerat dui id imperdiet. Integer sed ante nec magna faucibus venenatis.
            </p>
          </Box>          
          <Box
            sx={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '20px', 
              width: '95%',
              margin: '20px auto',
            }}
          >
            <p style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Poppins', marginBottom: '20px' }}>Favorites</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
              <div>
                <img src="one.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                <p style={{ fontSize: '16px', fontFamily: 'Poppins', marginTop: '10px', textAlign: 'center' }}>Sunday Morning</p>
              </div>
              <div>
                <img src="cover.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                <p style={{ fontSize: '16px', fontFamily: 'Poppins', marginTop: '10px', textAlign: 'center' }}>Happy, Happy</p>
              </div>
              <div>
                <img src="two.jpg" style={{ width: '100%', borderRadius: '10px' }} />
                <p style={{ fontSize: '16px', fontFamily: 'Poppins', marginTop: '10px', textAlign: 'center' }}>Coffee Lover</p>
              </div>
            </div>
          </Box>
        </>
      )}
      <Container style={{ backgroundColor: 'white' }}>
        {selectedTab === 'myjournal' && (
          <>
          <br></br>
          <br></br>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#333', fontFamily: 'Poppins' }}>
              My Travel Journal
            </Typography>
            <IconButton 
              color="primary" 
              aria-label="Add journal" 
              onClick={OpenFormModal} 
              style={addButtonStyle}
            >
              <AddIcon fontSize="large" style={{ color: '#fff', fontSize: '3rem' }} />
            </IconButton>
            <Container>
              <br></br>
              <br></br>
              <Grid container spacing={2}>
                {journals.map((journal, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <div style={{ overflow: 'hidden' }}>
                    <JournalView journal={journal} onClick={MyJournal} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Modal open={isFormModalOpen} onClose={CloseFormModal}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '200%',
                maxHeight: '80%',
                overflowY: 'auto',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <JournalFolder onAddJournal={AddJournal} />
              </div>
            </Modal>
          </>
        )}

        {selectedTab === 'entry' && (
          <>
          <br></br>
          <br></br>
          <IconButton 
            color="primary"
            aria-label="Back to Journal tab"
            onClick={() => setSelectedTab('myjournal')} 
            style={{ position: 'absolute', top: '30px', left: '30px' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#333', fontFamily: 'Poppins' }}>
              All Journal Entry
            </Typography>
            <IconButton 
              color="primary" 
              aria-label="Add journal entry" 
              onClick={OpenFormModal} 
              style={addButtonStyle}
            >
              <AddIcon fontSize="large" style={{ color: '#fff', fontSize: '3rem' }} />
            </IconButton>
            <Container>
              <br></br>
              <br></br>
              <Grid container spacing={1}>
                {entries.map((entry, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <div style={{ overflow: 'hidden' }}>
                      <JournalEntry entry={entry} onClick={MyJournalEntry} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Modal open={isFormModalOpen} onClose={CloseFormModal}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '200%',
                maxHeight: '80%',
                overflowY: 'auto',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <JournalEntryForm onAddEntry={AddEntry} />
              </div>
            </Modal>
          </>
        )}

        {selectedTab === 'maps' && (
          <>
            <MapLocations />
          </>
        )}

        {selectedTab === 'profile' && (
          <>
            <Profile />
          </>
        )}

        <Modal open={!!selectedEntry} onClose={CloseModalView}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '80%', maxHeight: '80%', overflowY: 'auto', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px', padding: '20px' }}>
            {selectedEntry && (
              <>
                <Typography variant="h5" component="h2" style={{ marginBottom: '10px', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                  {selectedEntry.title}
                </Typography>
                <Typography color="textSecondary" style={{ marginBottom: '10px', fontFamily: 'Poppins' }}>
                  Location: {selectedEntry.location}
                </Typography>
                <Typography variant="body2" component="p" style={{ marginBottom: '20px', fontFamily: 'Poppins' }}>
                  {selectedEntry.description}
                </Typography>
                <Typography color="textSecondary" style={{ marginBottom: '10px', fontFamily: 'Poppins' }}>
                  Mood: {selectedEntry.mood}
                </Typography>
                {selectedEntry.image && (
                  <img src={URL.createObjectURL(selectedEntry.image)} alt="Journal Entry" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }} />
                )}
                <Tooltip title="Edit" arrow>
                  <IconButton color="primary" aria-label="edit" onClick={() => EditEntry(selectedEntry)} style={{ marginRight: '10px' }}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" arrow> 
                  <IconButton color="error" aria-label="delete" onClick={() => DeleteEntry(selectedEntry)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip> 
              </>
            )}
          </div>
        </Modal>

      </Container>

      <BottomNavigation value={selectedTab} onChange={TabChange} showLabels style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', borderTop: '1px solid #ddd' }}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Journal" value="myjournal" icon={<BookRoundedIcon />} />
        <BottomNavigationAction value="entry" disabled icon={<FavoriteRoundedIcon />} />
        <BottomNavigationAction label="Maps" value="maps" icon={<PlaceIcon />} />
        <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleRoundedIcon />} />
      </BottomNavigation>
    </div>
  );
}

