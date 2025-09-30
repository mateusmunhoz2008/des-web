import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { OrbitProgress } from "react-loading-indicators";
import NavigationBar from '../../components/navigationbar';
import { 
    Label,
    Select,
    Submit,
} from "./style"
import { Client } from '../../api/client';
import { getPermissions } from '../../service/PermissionService';
import { getDataUser } from '../../service/UserService';

export default function CreateMatricula() {

    const [load, setLoad] = useState(true);
    const [alunos, setAlunos] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [alunoId, setAlunoId] = useState('');
    const [disciplinaId, setDisciplinaId] = useState('');
    const navigate = useNavigate();
    
    const permissions = getPermissions();
    const dataUser = getDataUser();

    function verifyPermission() {
        if (!dataUser) navigate('/login');
        else if (permissions.createMatricula === 0) navigate(-1);
    }

    function fetchData() {
        setLoad(true);
        setTimeout(() => {
            Promise.all([
                Client.get('alunos'),         // endpoint para listar alunos
                Client.get('disciplinas')     // endpoint para listar disciplinas (com nome do curso incluso)
            ])
            .then(([resAlunos, resDisciplinas]) => {
                setAlunos(resAlunos.data.data);
                setDisciplinas(resDisciplinas.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoad(false);
            });
        }, 1000);
    }

    useEffect(() => {
        verifyPermission();
        fetchData();
    }, []);

    function sendData() {
        const matricula = {
            aluno_id: alunoId,
            disciplina_id: disciplinaId
        };

        Client.post('matriculas', matricula)
            .then((response) => {
                console.log(response.data);
                navigate('/matriculas');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <NavigationBar />
            {
                load 
                ? (
                    <Container className="d-flex justify-content-center mt-5">
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" />
                    </Container>
                ) : (
                    <Container className='mt-2'>
                        <Label>Aluno</Label>
                        <Select name="aluno" id="aluno" onChange={(e) => setAlunoId(e.target.value)}>
                            <option value="">Selecione um aluno</option>
                            {
                                alunos.map((aluno, index) => (
                                    <option key={index} value={aluno.id}>
                                        {aluno.nome}
                                    </option>
                                ))
                            }
                        </Select>

                        <Label>Disciplina</Label>
                        <Select name="disciplina" id="disciplina" onChange={(e) => setDisciplinaId(e.target.value)}>
                            <option value="">Selecione uma disciplina</option>
                            {
                                disciplinas.map((disc, index) => (
                                    <option key={index} value={disc.id}>
                                        {disc.nome} ({disc.curso.nome})
                                    </option>
                                ))
                            }
                        </Select>

                        <Submit value="Voltar" onClick={() => navigate('/matriculas')} />
                        <Submit value="Cadastrar" onClick={sendData} />
                    </Container>
                )
            }
        </>
    )
}