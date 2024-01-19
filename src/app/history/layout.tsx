import NavBar from "../components/navbar/NavBar";

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            <div className="h-100">
                {children}
            </div>
        </>
    );
}