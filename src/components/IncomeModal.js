import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Box
} from "@mui/material";

const IncomeModal = ({ openBalance, handleBalanceClose }) => {
  const handleAddBalance = () => {
    console.log("Balance Added!");
    handleBalanceClose();
  };

  return (
    <Dialog open={openBalance} onClose={handleBalanceClose}>
      <DialogTitle>Add Balance</DialogTitle>
      
      {/* One row container */}
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        p={2}
      >
        <TextField
          label="Income Amount"
          type="number"
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
          required
        />

        <Button
          onClick={handleAddBalance}
          variant="contained"
          sx={{
            backgroundColor: "#f6b93b", // yellow
            color: "#fff",
            "&:hover": { backgroundColor: "#e58e26" },
            borderRadius:"20px"
          }}
        >
          Add Balance
        </Button>

        <Button
          onClick={handleBalanceClose}
          variant="outlined"
          sx={{borderRadius:"20px"}}
        >
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
};

export default IncomeModal;
