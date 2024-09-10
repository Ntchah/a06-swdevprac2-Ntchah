import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Container, Typography } from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function page() {
  return (
    <Container>
    
        <p className='text-3xl font-bold mt-6 text-center'>Vaccine Booking Form</p>
      
      <form noValidate autoComplete="off">
        <TextField
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Citizen ID"
          name="Citizen ID"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="hospital-label">Hospital</InputLabel>
          <Select
            labelId="hospital-label"
            id="hospital"
            variant="standard"
          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <Button
          variant="contained"
          color="primary"
          name="Book Vaccine"
          type="submit"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Book Vaccine
        </Button>
      </form>
    </Container>
  )
}
