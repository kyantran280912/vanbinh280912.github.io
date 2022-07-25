import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from '../../components/button/Button';
import InputPrimary from '../../components/input/InputPrimary';
import TitleSection from '../../components/title/TitleSection';
import TemplateAuth from './TemplateAuth';
import { BoxSignIn } from "./SignIn"
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../../firebase-app/firebase-config"
import { addDoc, collection } from 'firebase/firestore';
const schema = yup.object(
  {
    fullname: yup.string().required('Please enter your account'),
    email: yup.string().email('Please enter valid email address').required('Please enter your email address'),
    password: yup.string().min(8, 'Your password must be at least 8 characters or greater').required('Please enter your password')
  }
)

const SignUp = () => {
  const navigate = useNavigate()
  const [togglepassword, settogglepassword] = useState(false)
  const { control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  })
  const handelSubmit = async (values) => {
    if (!isValid) return;
    console.log(values);
    const user = await createUserWithEmailAndPassword(auth, values.email, values.password)
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    })
    const colRef = collection(db, "users");
    await addDoc(colRef,
      {
        fullname: values.fullname,
        email: values.email,
        password: values.password
      })
    toast.success('Create user success')
    navigate('/auth/signin')
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();

    //   }, 5000)
    // })

  }
  useEffect(() => {
    const arrError = (Object.values(errors));
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      })
    }

  }, [errors])
  console.log((Object.values(errors)));
  return (
    <TemplateAuth>
      <BoxSignIn >
        <TitleSection>Đăng kí</TitleSection>
        <form onSubmit={handleSubmit(handelSubmit)}>
          <div className="box-input">
            <div className="user">
              <InputPrimary placeholder='Họ và tên' name='fullname' control={control} />
            </div>
            <div className="email">
              <InputPrimary placeholder='Email' name='email' control={control} />
            </div>
            <div className="password" >
              <InputPrimary placeholder='Mật khẩu' type={togglepassword ? 'text' : 'password'} name='password'
                control={control}
              >
                {togglepassword ? <Icon icon='codicon:eye-closed' className="input-icon"
                  onClick={() => settogglepassword(!togglepassword)}
                ></Icon>
                  :
                  <Icon icon='codicon:eye' className="input-icon"
                    onClick={() => settogglepassword(!togglepassword)}
                  ></Icon>}
              </InputPrimary>
            </div>
          </div>
          <div className="note">
            Bạn đã có tải khoản? <Link to='/auth/signin'>Đăng nhập ngay</Link>
          </div>
          <label className="note-second">
            <input type="checkbox" />
            <span> Đồng ý với điều khoản</span>
          </label>
          <div className="button">
            <Button type="submit" isLoading={isSubmitting}>Đăng kí</Button>
          </div>
        </form>
      </BoxSignIn>
    </TemplateAuth>
  )
}
export const IconBack = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 20px;
  }
  :hover{
    background: ${({ theme }) => theme.bg2};
    
  }
`

export default SignUp