import { AuthPageInput } from "@/types/auth";
import styles from '@/styles/auth/auth.module.scss'
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";

const NameInput = ({register, errors}: AuthPageInput) => {
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';
  
  return ( 
    <label className={styles.form__label} >
      <input
          {...register('name', {
            required: 'Name!',
            minLength: 3,
            maxLength: 15,
            pattern: {
              value: /^[A-Za-zа-яА-ЯёЁ]*$/,
              message: 'Недопустимое значение'
            }
          })}
          className={`${styles.form__input} ${darkModeClass}`}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <span className={styles.error_alert}>{errors.name?.message}</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <span className={styles.error_alert}>Min length 3 symbols</span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <span className={styles.error_alert}>Max length 15 symbols</span>
        )}
    </label>
   );
}
 
export default NameInput;