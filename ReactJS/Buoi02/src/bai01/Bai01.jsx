import StudentInfo from "./components/StudentInfo"
import Header from './components/Header'
import Footer from './components/Footer'

function Bai01(){
    return (
        <>
        <Header/>
        <StudentInfo 
            name = "Nguyen Van A"
            mssv = "23456787"
            lop = "DHKTPM19BTT"
            />
        <Footer/>
        </>
    )
}
export default Bai01