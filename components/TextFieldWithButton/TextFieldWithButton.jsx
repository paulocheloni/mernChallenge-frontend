import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import {
  Card, FormControl, Grid, TextField, Button,
} from '@material-ui/core';

function TextFieldWithButton({ addData, dataName, validation, fetchErrors }) {
  const {
    handleSubmit, control,
  } = useForm();
  // const { textFieldProps, buttonProps } = props;

  const onSubmit = handleSubmit(async (e) => {
    console.log(e);
    await addData(e);
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>

          <FormControl fullWidth>
            <Grid container spacing={2}>
              <Grid item>
                <Controller
                  name={dataName}
                  control={control}
                  render={(
                    {
                      onChange, onBlur, value, name, ref,
                    },
                  ) => (
                    <TextField
                      autoFocus
                      innerRef={ref}
                      name={name}
                      id={name}
                      value={value}
                      onChange={((e) => onChange(e.target.value))}
                      onBlur={onBlur}
                      color="primary"
                      classes={{}}
                      placeholder={dataName}
                    />
                  )}
                />

              </Grid>
              <Grid item>
                <Button type="submit">
                  {' '}
                  {`add ${dataName}`}
                  {' '}
                </Button>
              </Grid>
            </Grid>

          </FormControl>
        </Card>
      </form>
    </div>
  );
}

TextFieldWithButton.defaultProps = {
  dataName: '',
};

TextFieldWithButton.propTypes = {
  addData: PropTypes.func.isRequired,
  dataName: PropTypes.string,
  resolver: PropTypes.func.isRequired,
};

export default TextFieldWithButton;
