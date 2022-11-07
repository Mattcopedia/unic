import CourseDocument from "components/DocumentComponents/CourseDocument";
import Layout from "components/Layout";
import Sidebar from "components/Sidebar";



export default function Dashboard() {
    return ( 
        <>
        <Layout>
          <Sidebar /> 
          <CourseDocument />
          </Layout>
        </>
    );
}
