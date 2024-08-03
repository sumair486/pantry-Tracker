// pages/index.js
import { useEffect, useState } from 'react';
import PantryForm from '../components/PantryForm';
import { addItem, updateItem, deleteItem, getItems } from '../services/firestore';
import {
  Box, Button, Container, Grid, Paper, TextField, Typography, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const items = await getItems();
    setItems(items);
  };

  const handleAdd = async (item) => {
    await addItem(item);
    fetchItems();
  };

  const handleUpdate = async (item) => {
    await updateItem(currentItem.id, item);
    setCurrentItem(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Pantry Management</Typography>
      <PantryForm onSubmit={currentItem ? handleUpdate : handleAdd} item={currentItem} />
      <TextField
        fullWidth
        variant="outlined"
        label="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={2}>
        {filteredItems.map(item => (
          <Grid item xs={12} key={item.id}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">{item.name} - {item.quantity}</Typography>
              <Box>
                <IconButton color="primary" onClick={() => setCurrentItem(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
