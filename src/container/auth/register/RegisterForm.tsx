import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRegister } from 'src/api/auth';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import * as Yup from 'yup';

export type RegisterValue = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function RegisterForm() {
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues: RegisterValue = {
    firstName: 'abees',
    lastName: 'dev',
    email: 'abeesdevjs@gmail.com',
    password: 'abeesdevjs',
    confirmPassword: 'abeesdevjs',
  };

  const methods = useForm<RegisterValue>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: RegisterValue) => {
    console.log(data);
    try {
      const res = await useRegister(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <RHFTextField name="firstName" label="Fist name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>
        <RHFTextField name="email" label="Email" />
        <RHFTextField name="password" label="Password" type="password" />
        <RHFTextField name="confirmPassword" label="Confirm" type="password" />
        <LoadingButton variant="contained" size="large" loading={isSubmitting} type="submit">
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
