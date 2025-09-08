// import React from "react";
import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  IconButton,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import IncomeModal from "./IncomeModal";
import ExpenseModal from "./ExpenseModal";

const ExpenseTracker = () => {
    const [openBalance, setOpenBalance] = useState(false);
    const [openExpense, setOpenExpense] = useState(false);
    const [expenses, setExpenses] = useState([
    { title: "Pizza", price: 500, category: "Food", date: "2025-09-08" },
    ]);
    const handleBalanceOpen = () => setOpenBalance(true);
    const handleBalanceClose = () => setOpenBalance(false);
    const handleExpenseOpen = () => setOpenExpense(true);
    const handleExpenseClose = () => setOpenExpense(false); 
  
  return (
    <div >    
      <Container maxWidth="lg" sx={{ mt: 2 }}>
      {/* Title */}
      <h1 style={{textAlign:"left", color:"#fff"}}>Expense Tracker</h1>

      {/* Wallet Balance & Expenses */}
      <Card sx={{ p: 4, mb: 2, background: "#737272ff" }}>
        <Grid container spacing={2}>
          {/* Wallet Balance */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "#aba9a9ff",
                p:3,
                borderRadius: 2,
                textAlign: "center"
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#fff">
                  Wallet Balance: <span style={{ color: "#38ef7d" }}>₹5000</span>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "linear-gradient(135deg, #11998e, #38ef7d)",
                    color: "white",
                    borderRadius: "12px",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(135deg, #38ef7d, #11998e)"
                    }
                  }}
                 onClick={handleBalanceOpen}
                >
                    <IncomeModal openBalance={openBalance} handleBalanceClose={handleBalanceClose} />
                    + Add Income
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Expenses */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "#aba9a9ff",
                p:3,
                ml: 1,
                borderRadius: 2,
                textAlign: "center"
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#fff">
                  Expenses: <span style={{ color: "#FFD93D" }}>₹0000</span>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                    color: "white",
                    borderRadius: "12px",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ff4b2b, #ff416c)"
                    }
                  }}
                  onClick={handleExpenseOpen}
                >
                  + Add Expense
                   <ExpenseModal openExpense={openExpense} handleExpenseClose={handleExpenseClose} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>

      {/* Recent Transactions & Top Expenses */}
      <Grid container spacing={2}>
        {/* Recent Transactions */}
        <Grid item xs={12} md={6}>
          <h3 style={{textAlign:"left",color:"#fff"}}>Recent Transactions</h3>
          <TableContainer component={Paper} sx={{ marginTop: 2, borderRadius: "12px" }}>
            <Table>  
            {/* Table Body */}
              <TableBody>
                {expenses.length > 0 ? (
                  expenses.map((exp, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={3}>{exp.title}<br/>
                    <span style={{color:"#a4a1a1ff"}}>{new Date(exp.date).toLocaleDateString("en-GB")}</span>
                    </TableCell>
                    <TableCell style={{color:"#f7a014ff"}}>₹{exp.price}</TableCell>
                    {/* <TableCell>{exp.category}</TableCell> */}
                    <TableCell align="center">
                      <IconButton
                        variant="contained"
                        sx={{background:"#f72020ff",color:"#fff", borderRadius:"15px", margin:"10px"}}
                        // onClick={() => onEdit(exp, index)}
                      >
                      <EditIcon />
                      </IconButton>
                      <IconButton
                        variant="contained"
                        sx={{background:"#f7a014ff",color:"#fff", borderRadius:"15px"}}
                        // onClick={() => onDelete(index)}
                      >
                      <ClearIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No trasactions!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Top Expenses */}
        <Grid item xs={12} md={6}>
          <h3 style={{textAlign:"left",color:"#fff"}}>Top Expenses</h3>
          <Card sx={{ background: "#fff", p: 2, borderRadius: 2 }}>
            <List sx={{color:"#a4a1a1ff"}}>
              <ListItem>
                <ListItemText 
                  primary="Food -"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Entertainment -"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Travel -"
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default ExpenseTracker;