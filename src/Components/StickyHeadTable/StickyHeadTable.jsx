import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './StickyHeadTable.css';

const columns = [
    { id: 'region', label: 'Region', minWidth: 170 },
    { id: 'firstname', label: 'Firstname', minWidth: 100 },
    {
        id: 'secondname',
        label: 'Secondname',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'lastname',
        label: 'Lastname',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'birthdate',
        label: 'Birthdate',
        minWidth: 170,
        align: 'right',
        format: (value) => value,
    },
];

function createData(region, firstname, secondname, lastname, birthdate) {
    return { region, firstname, secondname, lastname, birthdate };
}

const rows = [
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
    createData('RND', 'ALEX', 'GANIN', 'VL', '31-31-31'),
];

const useStyles = makeStyles({});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[100, 25, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
