// @flow
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Menu from "../../Menu";
import Button from "@material-ui/core/Button";
import {InertiaLink} from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {useSnackbar} from "notistack";

const CategoryCreate = (props) => {

    const snackbar = useSnackbar()
    const {prefix} = props

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        if (! props.category) {
            axios.post(`${route('tenant.categorias.store', props.prefix)}`, data)
                .then((res) => {
                        if (res.data.status === 200){
                            snackbar.enqueueSnackbar(res.data.success, {
                                variant:"success"
                            })
                            Inertia.get(route('tenant.categorias', props.prefix))
                        } else {
                            snackbar.enqueueSnackbar(res.data.error, {
                                variant:"error"
                            })
                        }
                    }
                )
        } else {
            axios.put(`/${props.prefix}/categorias/${props.category.id}`, data)
                .then((res) => {
                        if (res.data.status === 200){
                            snackbar.enqueueSnackbar(res.data.success,
                                {
                                    variant:"success"
                                })
                            Inertia.get(route('tenant.categorias', props.prefix))
                        } else {
                            snackbar.enqueueSnackbar(res.data.error,
                                {
                                    variant:"error",
                                })
                        }
                    }
                )
        }

    };


    return (

        <Menu title={'Cadastro de Categoria'} user={props.user}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant={'outlined'}
                    label={'Nome da Categoria'}
                    fullWidth
                    name={'name'}
                    margin={'normal'}
                    defaultValue={props.category ? props.category.name : ''}
                    inputRef={register({ required: true, maxLength: 20 })}
                    error={errors.name !== undefined}
                    helperText={errors.name && errors.name.message}
                />
                {errors.name && <p className={"text text-danger"}>O nome é obrigatório!</p>}
                <TextField
                    variant={'outlined'}
                    label={'URL'}
                    name={'url'}
                    fullWidth
                    margin={"normal"}
                    inputRef={register}
                />
                <TextField
                    variant={'outlined'}
                    label={'Descrição'}
                    name='description'
                    fullWidth
                    margin={"normal"}
                    inputRef={register}
                />
                <div className={"row"}>
                    <div className="col-lg-6 mt-4">
                        <Button
                            variant={'outlined'}
                            className='mr-4'
                            component={InertiaLink}
                            href={ route('tenant.categorias', prefix) }
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

export default CategoryCreate

