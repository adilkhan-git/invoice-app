"use client";
import NewInvoice from "@/components/NewInvoice/NewInvoice";
import styles from "../Header/Header.module.css";

import { Select, Box, TextField, MenuItem, Button } from "@mui/material";

import React, { useState } from "react";

function Header() {
  const [status, setStatus] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as string);
  };
  const handleClick = () => {
    // обработчик клика кнопки "New Invoice"
  };
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading1}>Invoices</div>
        <div className={styles.heading2}>There are n total invoices</div>
      </div>

      <div className={styles.filter}>
        <Box width="150px">
          <TextField
            label="Filter by status"
            select
            value={status}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="AL">All invoices</MenuItem>
            <MenuItem value="DR">Draft</MenuItem>
            <MenuItem value="PN">Pending</MenuItem>
            <MenuItem value="PD">Paid</MenuItem>
          </TextField>
        </Box>
      </div>
      <div className={styles.new_invoice}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleClick}
          size="small"
        >
          New Invoice
          <NewInvoice />
        </Button>
      </div>
    </div>
  );
}

export default Header;
