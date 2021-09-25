import React from 'react'
import { useLocalDb } from '../DbContext';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Grid, FormRow, Checkbox, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, IconButton, InputAdornment } from "@material-ui/core";
import { AddCircleOutline, RemoveCircleOutline} from "@material-ui/icons";

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
                climb: false,
                leveling_climb: false,
                trench_run: false,
                yellow_card: false,
                flipped_over: false,
                center_climb: false,
                red_card: false,
                alliance: "",

            }}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setTimeout(() => {
                localdb.put({
                    _id: new Date().toISOString(),
                    ...values
                }).then((result) => {
                    alert("Input Saved Successfully!");
                    console.log(result);
                }).catch((err) => {
                    console.log("Failed To Save Input!");
                    alert(err);
                })
                // alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                setValues,
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
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Alliance</FormLabel>
                  <RadioGroup aria-label="Alliance" name="alliance">
                    <FormControlLabel control={<Field as={Radio} type="radio" name="alliance" value="red"/>} label="Red" />
                    <FormControlLabel control={<Field as={Radio} type="radio" name="alliance" value="blue"/>} label="Blue" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <hr/>
            <div/>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                <Grid item> <Grid container direction="column" justify="flex-start" alignItems="center" spacing = {3}>
                    <Grid item> <Field type="number" as={TextField} name="inner_port" label="Inner Port" variant="filled"
                                                                      InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <IconButton onClick={() => {setValues({...values, inner_port: Math.max(parseInt(values.inner_port) - 1, 0)});}}>
                                                          <RemoveCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton onClick={() => {setValues({...values, inner_port: (parseInt(values.inner_port) + 1)});}}>
                                                          <AddCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    )
                                                  }}
                    /> </Grid>
                    <Grid item> <Field type="number" as={TextField} name="outer_port" label="Outer Port" variant="filled"
                                                                      InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <IconButton onClick={() => {setValues({...values, outer_port: Math.max(parseInt(values.outer_port) - 1, 0)});}}>
                                                          <RemoveCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton onClick={() => {setValues({...values, outer_port: parseInt(values.outer_port) + 1});}}>
                                                          <AddCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    )
                                                  }}
                    /> </Grid>
                    <Grid item> <Field type="number" as={TextField} name="lower_port" label="Lower Port" variant="filled"
                                                                      InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <IconButton onClick={() => {setValues({...values, lower_port: Math.max(parseInt(values.lower_port) - 1, 0)});}}>
                                                          <RemoveCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton onClick={() => {setValues({...values, lower_port: parseInt(values.lower_port) + 1});}}>
                                                          <AddCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    )
                                                  }}
                    /> </Grid>

                </Grid> </Grid>
                <Grid item> <Grid container direction="column" justify="flex-start" alignItems="center" spacing = {3}>
                        <Grid item> <Field type="number" as={TextField} name="fouls" label="Fouls"
                                                                      InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <IconButton onClick={() => {setValues({...values, fouls: Math.max(parseInt(values.fouls) - 1, 0)});}}>
                                                          <RemoveCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton onClick={() => {setValues({...values, fouls: parseInt(values.fouls) + 1});}}>
                                                          <AddCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    )
                                                  }}
                        /> </Grid>
                        <Grid item> <Field type="number" as={TextField} name="fouls_tech" label="Tech Fouls"
                                                                      InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <IconButton onClick={() => {setValues({...values, fouls_tech: Math.max(parseInt(values.fouls_tech) - 1, 0)});}}>
                                                          <RemoveCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                      <InputAdornment position="end">
                                                        <IconButton onClick={() => {setValues({...values, fouls_tech: parseInt(values.fouls_tech) + 1});}}>
                                                          <AddCircleOutline />
                                                        </IconButton>
                                                      </InputAdornment>
                                                    )
                                                  }}
                        /> </Grid>
                </Grid> </Grid>
            </Grid>
            <div/>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_well" label="What they did Well"/> </Grid>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_struggle" label="What they struggled with"/> </Grid>
                <Grid item> <Field type="input" as={TextField} multiline rows={3} rowsMax={7} labelWidth={60} name="team_abilities_cant" label="What they can't do"/> </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing = {3}>
              <Grid item> <FormControlLabel control={<Field as={Checkbox} type="checkbox" name="climb" />} label="Climb" labelPlacement="start"/> </Grid>
              <Grid item> <FormControlLabel control={<Field as={Checkbox} type="checkbox" name="leveling_climb" />} label="Leveled Climb" labelPlacement="start"/> </Grid>
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
