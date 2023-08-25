import { signUpFx } from '@/api/auth';
import EmailInput from '@/components/elements/AuthPage/EmailInput';
import NameInput from '@/components/elements/AuthPage/NameInput';
import PasswordInput from '@/components/elements/AuthPage/PasswordInput';
import styles from '@/styles/auth/auth.module.scss'
import { Inputs } from '@/types/auth';
import { showAuthError } from '@/utils/errors';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import spinnerStyles from '@/styles/spinner/spinner.module.scss'
import { useState } from 'react';
import { useStore } from 'effector-react';
import { $mode } from '@/context/mode';

const SignUpForm = ({switchForm}: {switchForm: () => void}) => {
  const [spinner, setSpinner] = useState(false);
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<Inputs>()
  
  const onSubmit = async (data: Inputs) => {
    try {
      setSpinner(true);
      const userData = await signUpFx({
        url: '/users/signup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('password')
      resetField('name')
      switchForm()
    } catch (error) {
      showAuthError(error);
      console.log(error);
    } finally {
      setSpinner(false);
    }
  }
  
  return ( 
    <>
      <form className={`${styles.form} ${darkModeClass}`} id="a-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>
          Create Account
        </h2>
        <span className={`${styles.form__span} ${darkModeClass}`}>
          or use email for registration
        </span>
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button
          type="submit"
          className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
        >
          {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN UP'}
        </button>
      </form>
    </>
   );
}
 
export default SignUpForm;