// @flow
import * as React from 'react';
import Menu from "../Menu";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import {InertiaLink} from "@inertiajs/inertia-react";
import {Add, Delete, Edit} from "@material-ui/icons";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import AlertDialog from "../Components/Alert";
import {Loading} from "../Components/Loading";
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import {useState} from "react";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import {useSnackbar} from "notistack";



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


const Departamentos = (props) => {
    const snackbar = useSnackbar()
    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const [ state, setState ] = useState({
        isDeleted: null,
        confirmEl: null,
        id: null
    })
    const destroy = (id) => {
        console.log(id)
        setState({confirmEl: true, id: id})
    }
    const deleteDepartamento = (id) => {
        setState({ isDeleted: id})
        setLoading(true)
        axios.delete(`/${props.prefix}/departamentos/${id}`)
            .then(res =>{
                setLoading(false)
                res && setState({isDeleted: null})
                snackbar.enqueueSnackbar('Departamento excluído com sucesso', {variant: "success"})
                Inertia.get(route('tenant.departamentos.index', props.prefix))
            })
    }
    return (
        <Menu title={"Departamentos"} user={props.user}>
            <Box dir={'rtl'} style={{display: 'flex', alignItems: 'end', marginBottom: "20px"}}>
                <Fab color={"primary"} size={"large"} component={InertiaLink} href={ route('tenant.departamentos.create', props.prefix)}>
                    <Add/>
                </Fab>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Cod </StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Descrição</StyledTableCell>
                            <StyledTableCell align="right">Ações</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !props.departamentos &&
                                <StyledTableRow>
                                    Nenhum Registro Encontrado
                                </StyledTableRow>

                        }
                        { props.departamentos.map((item, key) => (
                            <StyledTableRow key={key} >
                                <StyledTableCell component="th" scope="departamento">
                                    {item.id.substring(0, 5)}
                                </StyledTableCell>
                                <StyledTableCell>{item.name}</StyledTableCell>
                                <StyledTableCell>{item.description}</StyledTableCell>
                                <StyledTableCell align={"right"}>
                                    <Fab style={{ background: 'none', boxShadow: 'none'}}
                                         size={"large"}
                                         component={InertiaLink}
                                         href={`/${props.prefix}/departamentos/${item.id}`}
                                    >
                                        <Edit color={"primary"}/>
                                    </Fab>
                                    <Fab style={{ background: 'none', boxShadow: 'none'}} size={"large"}
                                         onClick={()=>destroy(item.id)}
                                    >
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
                                count={props.departamentos.length}
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
                             onConfirm={() => deleteDepartamento(state.id)}/>
            }
            {
                loading && <Loading open={loading} msg={'Carregando'}/>
            }

        </Menu>
    );
};

export default Departamentos
