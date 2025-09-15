import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function toastNotificationSubmit() {
    const toastNotif = () => {
        toast("Article submitted.");
    };
    return (
        <div className="toastNotification">
            <button onClick={toastNotif}></button>
        </div>
    )
}