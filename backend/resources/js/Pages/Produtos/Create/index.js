// @flow
import * as React from 'react';
import Menu from "../../Menu";
import {useEffect} from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Delete} from "@material-ui/icons";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) =>
    <div className="bg-img" ></div>
);

const SortableList = SortableContainer(({children}) => {
    return <div className="row">{children}</div>
});

const Create = (props) => {

    const usuario = props.user
    return (
        <Menu title={"Cadastrar Produto"} user={usuario}>
            <form>
                <TextField
                    label={'Nome do Produto'}
                    name={'name'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                />
                <TextField
                    label={"Categorias"}
                    select
                    name={'categories.id'}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                >
                    <MenuItem>
                        <em>Selecione a Categoria</em>
                    </MenuItem>
                    {
                        props.categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))
                    }

                </TextField>
                <TextField
                    margin={'normal'}
                    label={'Url'}
                    fullWidth
                    variant={'outlined'}
                    name={'slug'}
                />
                <TextField
                    margin={'normal'}
                    label={'Descrição'}
                    multiline
                    rows={4}
                    variant={'outlined'}
                    name={'description'}
                    fullWidth

                />
                <FormControl variant="outlined" margin={'normal'}>
                    <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <div className="border-top mt-4 mb-4">
                    <h2 className="text-primary mt-3">Fotos</h2>
                    <SortableList axis="xy">
                            {/*<div className="col-6 col-md-4">*/}
                            {/*    <div className="box-image d-flex justify-content-center align-items-center mt-3">*/}
                            {/*            <div>*/}
                            {/*                <span className="img-action d-flex justify-content-center align-items-center">*/}
                            {/*                    <div className="app-icon d-flex">*/}
                            {/*                        <Delete color="#fff" size="1.2em"/>*/}
                            {/*                    </div>*/}
                            {/*                </span>*/}
                            {/*            </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        <div className="col-6 col-md-4">
                            <div className="box-image box-upload d-flex justify-content-center align-items-center mt-3">
                                <input  type="file" multiple name="file" className="file-input" />
                                    <p className="box-text">
                                        <span className="text-plus">+</span>
                                        <span>Adicionar fotos</span>
                                    </p>
                            </div>
                        </div>

                    </SortableList>
                </div>
            </form>
        </Menu>
    );
};

export default Create
