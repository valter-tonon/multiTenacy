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
import {useState} from "react";
import AlertDialog from "../Components/Alert";
import {Loading} from "../Components/Loading";
import {useSnackbar} from "notistack";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";



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

const Categorias = (props) => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const usuario = props.user
    const [ state, setState ] = useState({
        isDeleted: null,
        confirmEl: null,
        id: null
    })
    const snackbar = useSnackbar();
    const destroy = (id) => {
        setState({confirmEl: true, id: id})
    }
    const deleteCategoria = (id) => {
        setState({ isDeleted: id})
        setLoading(true)
        axios.delete(`/${props.prefix}/categorias/${id}`)
            .then(res =>{
                setLoading(false)
                res && setState({isDeleted: null})
                snackbar.enqueueSnackbar('Categoria excluída com sucesso', {variant: "success"})
                Inertia.get(route('tenant.categorias', props.prefix))
            })
    }
    return (
    <Menu title="Categorias" user={usuario}>
            <Box dir={'rtl'} style={{display: 'flex', alignItems: 'end', marginBottom: "20px"}}>
                <Fab color={"primary"} size={"large"} component={InertiaLink} href={ route('tenant.categorias-create', props.prefix)}>
                    <Add/>
                </Fab>
            </Box>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead className={classes.head}>
                    <TableRow>
                        <StyledTableCell>Cod </StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell align="right">Ações</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.categorias.length < 1 &&
                        <StyledTableRow>
                            <StyledTableCell component="th" className="text-center w-100">
                                Nenhum Registro Encontrado
                            </StyledTableCell>

                        </StyledTableRow>

                    }
                    {props.categorias.map(( categoria, key) => (
                        <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="categoria">
                                {categoria.id.substring(0, 5)}
                            </StyledTableCell>
                            <StyledTableCell>{ categoria.name }</StyledTableCell>
                            <StyledTableCell align={"right"}>
                                <Fab style={{ background: 'none', boxShadow: 'none'}}
                                     size={"large"}
                                     component={InertiaLink}
                                     href={`/${props.prefix}/categorias/${categoria.id}`}
                                >
                                    <Edit color={"primary"}/>
                                </Fab>
                                <Fab style={{ background: 'none', boxShadow: 'none'}} size={"large"}
                                     onClick={()=>destroy(categoria.id)}>
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
                            count={props.categorias.length}
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
        {
            open &&
            <AlertDialog open={state.confirmEl} onClose={() => setState({isDeleted: null})}
                         onConfirm={() => deleteCategoria(state.id)}/>
        }
        {
            loading && <Loading open={loading} msg={'Carregando'}/>
        }

    </Menu>


);
};

export default Categorias
