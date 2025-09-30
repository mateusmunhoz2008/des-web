import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import { OrbitProgress } from "react-loading-indicators";
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import { Client } from '../../api/client'
import { getPermissions } from '../../service/PermissionService';
import { getDataUser } from '../../service/UserService';

export default function Home() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const navigate = useNavigate();
    const permissions = getPermissions()
    const dataUser  = getDataUser()

    function fetchData() {

        console.log(permissions)

        setLoad(true) 
        setTimeout(() => {
    
            Client.get('matriculas').then(res => {
                const matricula = res.data
                console.log("Matricula",matricula)
                setData(matricula.data)
            })
            .catch(function(error) {
                console.log(error)
            })
            .finally( () => {
                setLoad(false)
            })

        }, 1000)
    }

    function verifyPermission() {
        if(!dataUser) navigate('/login')
        else if(permissions.listMatriculas === 0) navigate(-1)
    }

    useEffect(() => {
        verifyPermission()
        fetchData()
    }, []);

    

    return (
        <>
            <NavigationBar />
            {
                load 
                ?
                    <Container className="d-flex justify-content-center mt-5">
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="" textColor="" />
                    </Container>
                :
            
                <Container className='mt-2'>
                    <DataTable 
                        title="Matrículas" 
                        rows={['Id aluno', 'Id diisciplina','Ações']}
                        hide={[false, true, false]}
                        data={data}
                        keys={['alunoId','disciplinaId']}
                        resource='matriculas'
                        crud={['viewMatricula', 'createMatricula', 'editMatricula', 'deleteMatricula']}
                        />
                </Container>
            }
        </>
    )
}