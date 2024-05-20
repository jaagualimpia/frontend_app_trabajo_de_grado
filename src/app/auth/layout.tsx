"use client"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <meta property="og:title" content="Title Here" />
            <style jsx global>{`
                body {
                    background-color: #F4F8FF;
                    color: white;
                }
            `}</style>
            <div>
                {children}
            </div>
        </>
    );
}