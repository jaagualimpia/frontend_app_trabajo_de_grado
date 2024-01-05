"use client"

import Head from "next/head";
import "./authStyle.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Auth</title>
                <link rel="stylesheet" href="auth.module.css" />
            </Head>
            <div>
                {children}
            </div>
        </>
    );
}