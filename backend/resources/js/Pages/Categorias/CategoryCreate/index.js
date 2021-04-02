// @flow
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Menu from "../../Menu";
import Button from "@material-ui/core/Button";
import {InertiaLink} from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSnackbar} from "notistack";
import MenuItem from "@material-ui/core/MenuItem";

const CategoryCreate = (props) => {

    const snackbar = useSnackbar()
    const {prefix} = props

    const { register, handleSubmit, watch, errors, setValue, reset } = useForm({
        defaultValues: { department_id: ''}
    });

    useEffect(() =>{
        register({name: "department_id"})
    },[register])

    useEffect(() =>{
        if (props.category) {
            reset({
                department_id : props.category.department_id
            })
        }
    },[])

    const onSubmit = data => {
        console.log(data)
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
                    inputRef={register}
                    error={errors.name !== undefined}
                    helperText={errors.name && errors.name.message}
                />
                {errors.name && <p className={"text text-danger"}>O nome é obrigatório!</p>}
                {
                    props.category &&
                    <TextField
                        variant={'outlined'}
                        label={'URL'}
                        name={'slug'}
                        fullWidth
                        margin={"normal"}
                        defaultValue={props.category ? props.category.slug : ''}
                        inputRef={register}
                    />
                }

                <TextField
                    name="department_id"
                    label={"Departamento"}
                    value={watch('department_id')}
                    select
                    variant="outlined"
                    InputLabelProps={{shrink:true}}
                    margin="normal"
                    onChange={(event => setValue('department_id', event.target.value))}
                    fullWidth
                >
                    <MenuItem value={0} disabled >
                        <em>Selecione o departamento</em>
                    </MenuItem>
                    {
                        props.departamentos.map((item, key)=>(
                            <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    variant={'outlined'}
                    label={'Descrição'}
                    name='description'
                    multiline
                    rows={3}
                    fullWidth
                    margin={"normal"}
                    defaultValue={props.category ? props.category.description : ''}
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

