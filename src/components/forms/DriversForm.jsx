import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

const schema = yup
  .object()
  .shape({
    firstname: yup.string().max(30).required(),
    lastname: yup.string().max(30).required(),
    age: yup.number().integer().positive().max(500).required(),
    email: yup.string().email().required(),
  })
  .required();

const defaults = {
  firstname: "",
  lastname: "",
  age: "",
  email: "",
};

export default function DriversForm({ driver, submitHandler }) {
  console.log(driver);

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: driver || defaults,
  });

  useEffect(() => {
    // console.log('useeffect', car);
    if (driver) {
      reset(driver);
    }
  }, [driver, reset]);

  const formRowStyle = {
    marginBlockEnd: "1em",
  };

  let submitFn = (vals) => {
    reset();
    driver ? submitHandler(driver._id, vals) : submitHandler(vals);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="firstname"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="name"
              {...field}
              label="First Name"
              fullWidth
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="lastname"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="name"
              fullWidth
              error={!!errors.lastname}
              {...field}
              label="Last Name"
              helperText={errors.lastname?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="age"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              fullWidth
              type="text"
              error={!!errors.age}
              pattern={/[0-500]/}
              {...field}
              label="Age"
              helperText={errors.age?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="email"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              fullWidth
              type="text"
              error={!!errors.email}
              {...field}
              label="Email"
              helperText={errors.email?.message}
            />
          )}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
