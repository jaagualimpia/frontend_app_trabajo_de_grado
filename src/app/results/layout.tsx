import NavBar from "../components/navbar/NavBar";

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}