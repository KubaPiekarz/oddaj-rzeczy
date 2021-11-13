import axios from "axios";
import React, { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";


const Contact = () => {

    type FormState = {
        name: string;
        email: string;
        message: string;
    }

    const initialFormState = {
        name: '',
        email: '',
        message: '',
    }
    

    const[formState, setFormState] = useState<FormState>(initialFormState);
    const formSparkUrl = "https://submit-form.com/r8VkFGX9";

    const updateFormControl = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };

    const submitForm = async (event: FormEvent) =>{
        event.preventDefault();
        await postSubmission();
    }

    const postSubmission = async () => {
        const payload = {
            ...formState
        }

        try{
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
        }catch(error){
            console.log(error);
        }
    };

    const [showMessage, setShowMessage] = useState(false);
    const onClick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false)
        }, 4000);
    }


    return (
        <section id="contact-section">
            <form onSubmit={submitForm}>
                <h1>Skontaktuj się z nami</h1>
                {showMessage ? <div className="message">Dziękujemy za wiadomość. Wkrótce ktoś się z tobą skontaktuje </div>:null}
                <div className="name-email-input">
                    <p>Wpisz swoje imię</p>
                    <input className="name-input"  type="text" id="name" value={formState.name} onChange={updateFormControl}></input>
                    <p>Wpisz swój email</p>
                    <input className="name-input" type="email" id="email" value={formState.email} onChange={updateFormControl}></input>
                </div>
                <p>Wpisz swoją wiadomość</p>
                <textarea className="message-input"  id="message" value={formState.message} onChange={updateFormControl}></textarea>
                <button className="send-button" onClick={onClick}>Wyślij</button>
            </form>
        </section>
    )
}

export default Contact;