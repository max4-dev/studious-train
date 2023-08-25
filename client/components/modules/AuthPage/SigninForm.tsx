import { signUpFx, signinFx } from '@/api/auth';
import NameInput from '@/components/elements/AuthPage/NameInput';
import PasswordInput from '@/components/elements/AuthPage/PasswordInput';
import { $mode } from '@/context/mode';
import styles from '@/styles/auth/auth.module.scss'
import spinnerStyles from '@/styles/spinner/spinner.module.scss'
import { Inputs } from '@/types/auth';
import { showAuthError } from '@/utils/errors';
import { useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SigninForm = () => {
  const [spinner, setSpinner] = useState(false);
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<Inputs>()
  
  const onSubmit = async (data: Inputs) => {
    try {
      await signinFx({
        url: '/users/login',
        username: data.name,
        password: data.password,
      })      

      resetField('password')
      resetField('name')
      router.push('/dashboard')
    } catch (error) {
      showAuthError(error);
      console.log(error);
    } finally {
      setSpinner(false);
    }
  }
  
  return ( 
    <>
      <form className={`${styles.form} ${darkModeClass}`} id="b-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>
          Enter to Account
        </h2>
        <NameInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button
          type="submit"
          className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
        >
          {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN IN'}
        </button>
      </form>
    </>
   );
}
 
export default SigninForm;
