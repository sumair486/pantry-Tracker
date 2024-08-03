// components/PantryForm.js
import { useState } from 'react';
import { Button, TextField, Box, Grid } from '@mui/material';

const PantryForm = ({ onSubmit, item }) => {
  const [name, setName] = useState(item ? item.name : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Item Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Quantity"
            variant="outlined"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            {item ? 'Update' : 'Add'} Item
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PantryForm;
