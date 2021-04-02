// @flow
import * as React from 'react';
import Menu from "../../Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {InertiaLink} from "@inertiajs/inertia-react";
import {useSnackbar} from "notistack";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";


const Create = (props) => {
    const snackbar = useSnackbar()
    const {prefix} = props

    const onSubmit = data => {
        if (! props.departamento) {
            axios.post(`${route('tenant.departamentos.store', props.prefix)}`, data)
                .then((res) => {
                        if (res.data.status === 200){
                            snackbar.enqueueSnackbar(res.data.success, {
                                variant:"success"
                            })
                            Inertia.get(route('tenant.departamentos.index', props.prefix))
                        } else {
                            snackbar.enqueueSnackbar(res.data.error, {
                                variant:"error"
                            })
                        }
                    }
                )
        } else {
            axios.put(`/${props.prefix}/departamentos/${props.departamento.id}`, data)
                .then((res) => {
                        if (res.data.status === 200){
                            snackbar.enqueueSnackbar(res.data.success,
                                {
                                    variant:"success"
                                })
                            Inertia.get(route('tenant.departamentos.index', props.prefix))
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

    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <Menu title={'Criar Departamento'} user={props.user}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant={'outlined'}
                    label={'Nome do Departamento'}
                    fullWidth
                    name={'name'}
                    margin={'normal'}
                    defaultValue={props.departamento ? props.departamento.name : ''}
                    inputRef={register({ required: true, maxLength: 20 })}
                    error={errors.name !== undefined}
                    helperText={errors.name && errors.name.message}
                />
                {errors.name && <p className={"text text-danger"}>O nome é obrigatório!</p>}
                {
                    props.departamento &&
                    <TextField
                        variant={'outlined'}
                        label={'URL'}
                        name={'url'}
                        fullWidth
                        defaultValue={props.departamento ? props.departamento.url : ''}
                        margin={"normal"}
                        inputRef={register}
                        error={errors.url !== undefined}
                        helperText={errors.url && errors.url.message}
                    />
                }
                <TextField
                    variant={'outlined'}
                    label={'Descrição'}
                    name='description'
                    fullWidth
                    margin={"normal"}
                    defaultValue={props.departamento ? props.departamento.description : ''}
                    inputRef={register({ required: true})}
                    error={errors.description !== undefined}
                    helperText={errors.description && errors.description.message}
                />
                {errors.description && <p className={"text text-danger"}>A descrição é obrigatória!</p>}
                <div className={"row"}>
                    <div className="col-lg-6 mt-4">
                        <Button
                            variant={'outlined'}
                            className='mr-4'
                            component={InertiaLink}
                            href={ route('tenant.departamentos.index', prefix) }
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
