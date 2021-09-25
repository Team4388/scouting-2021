import React from 'react'
import { useLocalDb } from '../DbContext';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Grid, FormRow } from "@material-ui/core";

const InputPage = () => {
    const localdb = useLocalDb();
    console.log(localdb);
    return (
        <div>
            <Formik
            initialValues={{
                team_number: '',
                match_number: '',
                team_abilities_well: '',
                team_abilities_struggle: '',
                team_abilities_cant: '',
                fouls: '0',
                fouls_tech: '0',
                inner_port: '0',
                outer_port: '0',
                lower_port: '0',
                control_panel: '0',
                disabled: false,
                assisted_climb: false,
                climb: false,
                leveling_climb: false,
                trench_run: false,
                yellow_card: false,
                flipped_over: false,
                center_climb: false,
                red_card: false,

            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
            <Form>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                    <Grid item> <Field type="input" as={TextField} name="team_number" label="Team #"/> </Grid>
                    <Grid item> <Field type="input" as={TextField} name="match_number" label="Match Number"/> </Grid>
            </Grid>
            <hr/>
            <div/>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                <Grid item> <Grid container direction="column" justify="flex-start" alignItems="center" spacing = {3}>
                    <Grid item> <Field type="number" as={TextField} name="inner_port" label="Inner Port" variant="filled"/> </Grid>
                    <Grid item> <Field type="number" as={TextField} name="outer_port" label="Outer Port" variant="filled"/> </Grid>
                    <Grid item> <Field type="number" as={TextField} name="lower_port" label="Lower Port" variant="filled"/> </Grid>
                    <Grid item> <Field type="number" as={TextField} name="control_panel" label="Control Panel"/> </Grid>
                </Grid> </Grid>
                <Grid item> <Grid container direction="column" justify="flex-start" alignItems="center" spacing = {3}>
                        <Grid item> <Field type="number" as={TextField} name="fouls" label="Fouls"/> </Grid>
                        <Grid item> <Field type="number" as={TextField} name="fouls_tech" label="Tech Fouls"/> </Grid>
                </Grid> </Grid>
            </Grid>
            <div/>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_well" label="What they did Well"/> </Grid>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_struggle" label="What they struggled with"/> </Grid>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_cant" label="What they can't do"/> </Grid>
            </Grid>
            <div/>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                <Button type="submit" disabled={isSubmitting}> Submit </Button>
            </Grid>
            </Form>
            )}
            </Formik>
            <button onClick={() => {
                localdb.put({
                    //creates a uuid for pouchdb to index documents, doing it this way will make the db sort them by date when viewed
                  _id: "4388:" + new Date().toISOString(),
                  inner_port: 0,
                  outer_port: 0,
                  lower_port: 0,
                  control_panel: 0,
                  disabled: false,
                  assisted_climb: false,
                  climb: false,
                  leveling_climb: false,
                  trench_run: false,
                  yellow_card: false,
                  red_card: false,
                  flipped_over: false,
                  center_climb: false
                }).then((result) => {
                    console.log("Input Saved Successfully!");
                    console.log(result);
                }).catch((err) => {
                    console.log("Failed To Save Input!");
                    console.log(err);
                })
                localdb.allDocs().then(console.log);
            }}>
                Test Save Button
            </button>
        </div>
    )
}

export default InputPage
