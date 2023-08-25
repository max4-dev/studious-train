import { AuthPageInput } from "@/types/auth";
import styles from '@/styles/auth/auth.module.scss'
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";

const EmailInput = ({register, errors}: AuthPageInput) => {
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';

  return(
    <label className={styles.form__label} >
      <input
          {...register('email', {
            required: 'email!',
          })}
          className={`${styles.form__input} ${darkModeClass}`}
          type="email"
          placeholder="email"
        />
        {errors.email && (
          <span className={styles.error_alert}>{errors.email?.message}</span>
        )}
    </label>)
   }
 
export default EmailInput;