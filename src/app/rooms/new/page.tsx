"use client";

// Dependencies
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Style
import styles from "./NewRoom.module.css";
import globalStyles from "../../style.module.css";

type Inputs = {
    name: string;
    password: string;
    event: string;
}

export default function NewRoom(): ReactElement {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // TODO /room/new
        console.log(data)
    }

    // TODO: Fetch event list from backend
    // TODO: Invite friends URL?

    return <div className={styles.container}>
        <form 
            className={styles.wrapper} 
            onSubmit={handleSubmit(onSubmit)}>
            <div className={globalStyles.inputWrapper}>
                <label>Name</label>
                <input type="text" {...register("name")}/>
            </div>
            <div className={globalStyles.inputWrapper}>
                <label>Event</label>
                <select {...register("event")}>
                    <option value={"0"}>Prova 1</option>
                    <option value={"1"}>Prova 2</option>
                    <option value={"2"}>Prova 3</option>
                </select>
            </div>
            <div className={globalStyles.inputWrapper}>
                <label>Password</label>
                <input type="password" {...register("password")}/>
            </div>
           <input type="submit" value={"Add room"}/>
        </form>
    </div>
}