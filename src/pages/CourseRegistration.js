import CourseReg from "components/CoureRegistrationFormComponent/CourseReg";
import Layout from "components/Layout";
import Sidebar from "components/Sidebar";

 

export default function Dashboard() {
    return (
        <>
        <Layout>
    <Sidebar />
     <CourseReg />  
     </Layout>
        </>
    );
}
