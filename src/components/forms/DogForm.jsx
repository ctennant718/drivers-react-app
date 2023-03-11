import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

const schema = yup
  .object()
  .shape({
    name: yup.string().max(30).required(),
    playfulness: yup.number().integer().positive().max(5).required(),
    image_link: yup.string().url(),
  })
  .required();

const defaults = {
  name: "",
  playfulness: "",
  image_link: "",
};

export default function CarForm({ dog, submitHandler }) {
  console.log(dog);

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: dog || defaults,
  });

  useEffect(() => {
    // console.log('useeffect', car);
    if (dog) {
      reset(dog);
    }
  }, [dog, reset]);

  const formRowStyle = {
    marginBlockEnd: "1em",
  };

  let submitFn = (vals) => {
    reset();
    dog ? submitHandler(dog._id, vals) : submitHandler(vals);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="name"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="name"
              {...field}
              label="Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="playfulness"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="number"
              fullWidth
              error={!!errors.playfulness}
              {...field}
              label="Playfulness"
              pattern={/[0-5]/}
              helperText={errors.playfulness?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="image_link"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              fullWidth
              type="text"
              error={!!errors.image_link}
              {...field}
              label="Image URL"
              helperText={errors.image_link?.message}
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
