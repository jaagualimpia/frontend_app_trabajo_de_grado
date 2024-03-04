"use client"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <meta property="og:title" content="Title Here" />
            <style jsx global>{`
                body {
                    background-color: #0F0F0F;
                    color: white;
                }
            `}</style>
            <div>
                {children}
            </div>
        </>
    );
}