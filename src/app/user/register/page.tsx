"use client";

// Dependencies
import { ReactElement, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";

// Context
import { DataContext } from "@/Context/DataProvider";

// Styles
import globalStyles from '../../style.module.css'

// Constants
import { AXIOS_CONST } from "@/Constants/Axios";

// Types
type Inputs = {
    username: string;
    password: string;
    email: string;
}

export default function RegisterUser(): ReactElement {
    const { setAppData } = useContext(DataContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>()

    // TODO: Loading
    const onSubmitRegister: SubmitHandler<Inputs> = async (registerData: Inputs) => {
        axios
        .post(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.USER}`, registerData)
        .then(({ data }) => {
            const { token, ...rest } = data;
            setAppData({ user: rest });
            Cookies.set("token", token, { expires: 7 });
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return <form onSubmit={handleSubmit(onSubmitRegister)}>
        <div className={globalStyles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")}/>
        </div>
        <div className={globalStyles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text"  {...register("username")}/>
        </div>
        <div className={globalStyles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password")}/>
        </div>
        <div className={globalStyles.buttonWrapper}>
            <input type="submit" value={"Register"}/>
        </div>
    </form>
}