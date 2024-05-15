import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
}
//TODO
const programURL = "https://solo-landing.vercel.app/4week.xlsx" // Change when production ready

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
    <div>
        <h1>Time to get started!, {firstName}!</h1>
        <a href={programURL} download>
            Download Here
        </a>
    </div>
);

export default EmailTemplate;
