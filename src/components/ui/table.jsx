import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

const formatDate = (dateString) => {
    // Parse the date string (assuming it's in ISO format)
    const date = new Date(dateString);
    // Return the formatted date string (YYYY-MM-DD)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });
};

const formatTime = (timeString, format) => {
    // Parse the time string (assuming it's in ISO format)
    const time = new Date(timeString);
    // Return the formatted time string (e.g., HH:mm a)
    return time.toLocaleTimeString("en-US", { format });
};

function BasicTable({ shifts, onRowSelectionChange }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell padding='checkbox'>
                            <Checkbox color='primary' indeterminate={shifts.length > 0 && !allSelected(shifts)} checked={allSelected(shifts)} onChange={() => onRowSelectionChange(!allSelected(shifts))} />
                        </TableCell>
                        <TableCell>Date (MM-DD-YYYY)</TableCell>
                        <TableCell align='right'>Clock in</TableCell>
                        <TableCell align='right'>Clock out</TableCell>
                        <TableCell align='right'>Total Hours</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shifts.map((shift) => (
                        <TableRow key={shift._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell padding='checkbox'>
                                <Checkbox color='primary' checked={shift.isSelected || false} onChange={() => onRowSelectionChange(shift._id)} />
                            </TableCell>
                            <TableCell component='th' scope='row'>
                                {new Date(shift.date).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}
                            </TableCell>
                            <TableCell align="right">{new Date(shift.startTime).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}</TableCell>
                            <TableCell align="right">{new Date(shift.endTime).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}</TableCell>
                            <TableCell align='right'>{shift.totalHours}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function allSelected(shifts) {
    return shifts.every((shift) => shift.isSelected);
}

export default BasicTable;
