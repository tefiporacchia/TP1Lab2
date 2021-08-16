import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { Formik, Form } from 'formik'
import TextFieldContainer from './TextFieldContainer'
import * as yup from 'yup'
import {
    useParams
} from "react-router-dom";


const validationSchema = yup.object().shape({
    title: yup.string().required().nullable().label('Title'),
    description: yup.string().required().nullable(),
    /*year: yup.string().required().nullable(),
    rank: yup.string().required().nullable(),
    category: yup.string().required().nullable(),*/
})

const initialValues = {
    title: '',
    description: '',
    /*year: '',
    rank: '',
    category: '',*/
}

export default function ToDoForm({ title, onSubmit, getTodoById }) {

    let { id } = useParams();
    const [campos, setCampos] = useState(null);

    useEffect(() => {
        console.log(id)
        if(id){
            getTodoById(id)
                .then(res=>{
                    console.log(res)
                    setCampos(res.data)
                })
                .catch(err=>{
                    console.log(err)
                })

        }
    },[])




    const addTodo = async (values) => {
        console.log('holaa')
        try {
            await onSubmit(values)
        } catch (e) {
            console.log('ERROR', e)
        }
    }
    return (
        <Container>
            <Box marginTop={6}>
                <Grid container justify="center">
                    <Grid container item xs={6} justify="center" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h4">{title}</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={addTodo}
                            >
                                {(formikProps) => (
                                    <Form onSubmit={formikProps.handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <TextFieldContainer id="title" label="Title" formikProps={formikProps} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextFieldContainer
                                                    id="description"
                                                    label="Description"
                                                    formikProps={formikProps}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" color="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}