// @flow
import * as React from 'react';
import Menu from "../../Menu";
import {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";
import {InertiaLink} from "@inertiajs/inertia-react";
import {useSnackbar} from "notistack";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";

const SortableItem = SortableElement(({value}) =>
    <div className="bg-img" ></div>
);

const SortableList = SortableContainer(({children}) => {
    return <div className="row">{children}</div>
});

const Create = (props) => {
    const snackbar = useSnackbar()
    const {prefix} = props
    const {register, handleSubmit} = useForm();

    const onSubmit = (dataForm) => {
        console.log(dataForm)
        if (! props.marca) {
            axios.post(  `${route('tenant.marcas.store', props.prefix)}`, dataForm)
                .then((res) => {
                        if (res.data.status === 200){
                            snackbar.enqueueSnackbar(res.data.success, {
                                variant:"success"
                            })
                            Inertia.get(route('tenant.marcas.index', props.prefix))
                        } else {
                            snackbar.enqueueSnackbar(res.data.error, {
                                variant:"error"
                            })
                        }
                    }
                )
        } else {
            axios.put(`/${props.prefix}/marcas/${props.marca.id}`, dataForm)
                .then((res) => {
                    if (res.data.status === 200){
                        snackbar.enqueueSnackbar(res.data.success, {
                            variant:"success"
                        })
                        Inertia.get(route('tenant.marcas.index', props.prefix))
                    } else {
                        snackbar.enqueueSnackbar(res.data.error, {
                            variant:"error"
                        })
                    }
                })
        }
    }
    const title = props.marca ? 'Editar Marca' : 'Cadastrar Marca'
    const usuario = props.user
    return (
        <Menu title={title} user={usuario}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label={'Nome do Marca'}
                    name={'name'}
                    variant={'outlined'}
                    defaultValue={props.marca ? props.marca.name : ''}
                    fullWidth
                    inputRef={register}
                    margin={'normal'}
                />
                {
                    props.marca &&
                    <TextField
                        margin={'normal'}
                        label={'Url'}
                        fullWidth
                        inputRef={register}
                        variant={'outlined'}
                        defaultValue={props.marca ? props.marca.slug : ''}
                        name={'slug'}
                    />

                }

                <TextField
                    margin={'normal'}
                    inputRef={register}
                    label={'Descrição'}
                    multiline
                    rows={4}
                    variant={'outlined'}
                    defaultValue={props.marca ? props.marca.description : ''}
                    name={'description'}
                    fullWidth

                />
                <div className="border-top mt-4 mb-4">
                    <h2 className="text-primary mt-3">Logo</h2>
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
                                <input  type="file" multiple name="logo" className="file-input" ref={register} />
                                <p className="box-text">
                                    <span className="text-plus">+</span>
                                    <span>Adicionar fotos</span>
                                </p>
                            </div>
                        </div>

                    </SortableList>
                </div>
                <div className={"row"}>
                    <div className="col-lg-6 mt-4 mb-4">
                        <Button
                            variant={'outlined'}
                            className='mr-4'
                            component={InertiaLink}
                            href={ route('tenant.marcas.index', prefix) }
                        >
                            Cancelar
                        </Button>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Salvar</Button>
                    </div>
                </div>
            </form>
        </Menu>
    );
};

export default Create
