import {
  Dialog,
  DialogTitle,
  TextField,
  MenuItem,
  Button,
  Box,
  Select
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {useState} from "react";
const ExpenseModal = ({ openExpense, handleExpenseClose }) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  console.log(title,category,price,selectedDate)
  const handleAddExpense = () => {
    console.log("Balance Added!");
    handleExpenseClose();
  };

  return (
    <Dialog open={openExpense} onClose={handleExpenseClose}>
      <DialogTitle variant="h4">Add Expenses</DialogTitle>
      
      {/* One row container */}
      <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      margin={2}
      gap={2}
      p={2}
    >
      {/* Title */}
      <TextField
        label="Title"
        type="text"
        variant="outlined"
        size="small"
        value={title}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Price */}
      <TextField
        label="Price"
        type="number"
        variant="outlined"
        size="small"
        value={price}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      {/* Category Select */}
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        size="small"
        sx={{
          minWidth: 180,
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <MenuItem value="">
          --- Select Category ---
        </MenuItem>
        <MenuItem value="food">Food</MenuItem>
        <MenuItem value="entertainment">Entertainment</MenuItem>
        <MenuItem value="travel">Travel</MenuItem>
      </Select>

      {/* Date Picker */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slotProps={{
                textField: {
                    size: "small",
                    placeholder:"mm/dd/yyyy",
                    sx: {
                        borderRadius: "20px",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }
                }
            }}
        />
      </LocalizationProvider>

      {/* Add Button */}
      <Button
        onClick={handleAddExpense}
        variant="contained"
        sx={{
          backgroundColor: "#f6b93b",
          color: "#fff",
          "&:hover": { backgroundColor: "#e58e26" },
          borderRadius: "20px"
        }}
      >
        Add Expense
      </Button>

      {/* Cancel Button */}
      <Button
        onClick={handleExpenseClose}
        variant="outlined"
        sx={{ borderRadius: "20px" }}
      >
        Cancel
      </Button>
    </Box>
    </Dialog>
  );
};

export default ExpenseModal;
