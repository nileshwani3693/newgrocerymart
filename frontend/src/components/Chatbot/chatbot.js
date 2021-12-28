import React from 'react'

import "../inc/chatbot.css"
import ChatBot from 'react-simple-chatbot'


export default function Chatbot() {
    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to Grocery Mart",
            trigger: "Done",
        },
        {
            id: "Done",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                { value: "Login", label: "Login", trigger: "Login",},
                { value: "Product", label: "Product", trigger: "Product" },
                { value: "Cart", label: "Cart", trigger: "Cart" },
                { value: "Other", label: "Other", trigger: "Other" },
            ],
        },
        {
            id: "Login",
            message: "Please let us know your issue...",
            trigger: 'input1',
        },
        {
            
            id: "input1",
            user: true,
            trigger: 'output1',
        },
        {
            id: "output1",
            message: "Thank You for reporting your issue,  Our team  will resolve your issue ASAP",
            end: true,
        },
        {
            id: "Product",
            message: "Please let us know your issue...",
            trigger: 'input2',
        },
        {
            
            id: "input2",
            user: true,
            trigger: 'output2',
        },
        {
            id: "output2",
            message: "Thank You for reporting your issue,  Our team  will resolve your issue ASAP",
            end: true,
        },
        {
            id: "Cart",
            message: "Please let us know your issue...",
            trigger: 'input3',
        },
        {
            
            id: "input3",
            user: true,
            trigger: 'output3',
        },
        {
            id: "output3",
            message: "Thank You for reporting your issue,  Our team  will resolve your issue ASAP",
            end: true,
        },
        {
            id: "Other",
            message: "Please drop a mail to: grocery_mart _support@abc.com",
            trigger: 'end',
        },
        
        {
            id: "end",
            message: "Thank You !",
            end: true,
        },
       
    ];
    
    return (
        <>
            <div className="ChatContainer">
                <ChatBot steps={steps} />
            </div>
         
        </>
    )
}