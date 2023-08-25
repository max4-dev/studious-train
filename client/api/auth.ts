import { ISignUpFx, ISigninFx } from './../types/auth';
import api from '../core/axiosClient'
import { toast } from 'react-toastify';
import { createEffect } from 'effector-next';

export const signUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })
    console.log(data);
    

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return;
    }

    toast.success('Успех!')

    return data;
})

export const signinFx = createEffect(
  async ({ url, username, password }: ISigninFx) => {
    const { data } = await api.post(url, { username, password })

    if (data.warningMeassage) {
      toast.warning(data.warningMeassage)
      return
    }

    toast.success('Успех!')

    return data;
})
