// @flow
import * as React from 'react';
import Menu from "../Menu";
import Box from "@material-ui/core/Box";
import {Add, Delete, Edit} from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import {InertiaLink} from "@inertiajs/inertia-react";


const StyledTableCell = withStyles((theme) =>
    createStyles({
        head: {
            backgroundColor: '#343A40',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    }
});

const Marcas = (props) => {
    const classes = useStyles();
    const usuario = props.user
    return (
        <Menu title="Marcas" user={usuario}>
            <Box dir={'rtl'} style={{display: 'flex', alignItems: 'end', marginBottom: "20px"}}>
                <Fab color={"primary"} size={"large"}
                     component={InertiaLink}
                     href={route('tenant.marcas.brand-create', props.prefix)}
                >
                    <Add/>
                </Fab>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Cod </StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>URL</StyledTableCell>
                            <StyledTableCell align="right">Ações</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.marcas.map((marca, key) => (
                            <StyledTableRow key={key}>
                                <StyledTableCell component="th" scope="categoria">
                                    {marca.id.substring(0, 5)}
                                </StyledTableCell>
                                <StyledTableCell>{marca.name}</StyledTableCell>
                                <StyledTableCell>{marca.slug}</StyledTableCell>
                                <StyledTableCell align={"right"}>
                                    <Fab style={{ background: 'none', boxShadow: 'none'}}
                                         size={"large"}
                                         component={InertiaLink}
                                         href={`/${props.prefix}/marcas/${marca.id}`}
                                    >
                                        <Edit color={"primary"}/>
                                    </Fab>
                                    <Fab style={{ background: 'none', boxShadow: 'none'}} size={"large"}>
                                        <Delete color={"secondary"}/>
                                    </Fab>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}

                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={1}
                                rowsPerPage={10}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'Itens por página' },
                                    native: true,
                                }}
                                page={0}
                                ActionsComponent={TablePaginationActions}
                                labelRowsPerPage={'Itens por página'}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Menu>

    );
};

export default Marcas
