import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Modal, Button } from 'react-bootstrap';
import { OrbitProgress } from "react-loading-indicators";
import NavigationBar from '../../components/navigationbar';
import {
    Label,
    Select,
    Submit,
} from "./style";
import { Client } from '../../api/client';
import { getPermissions } from '../../service/PermissionService';
import { getDataUser } from '../../service/UserService';

export default function EditMatricula() {

    const location = useLocation();
    const matricula = location.state?.item;

    const [alunos, setAlunos] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [alunoId, setAlunoId] = useState('');
    const [disciplinaId, setDisciplinaId] = useState('');
    const [cursoId, setCursoId] = useState('');

    const [load, setLoad] = useState(true);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const permissions = getPermissions();
    const dataUser = getDataUser();

    function verifyPermission() {
        if (!dataUser) navigate('/login');
        else if (permissions.editMatricula === 0) navigate(-1);
    }

    function fetchData() {
        setLoad(true);

        Promise.all([
            Client.get('alunos'),
            Client.get('disciplinas')
        ])
            .then(([resAlunos, resDisciplinas]) => {
                setAlunos(resAlunos.data.data);
                setDisciplinas(resDisciplinas.data.data);

                // Preencher os campos com dados da matrícula atual
                setAlunoId(matricula.aluno.id);
                setDisciplinaId(matricula.disciplina.id);
                setCursoId(matricula.disciplina.curso_id);
            })
            .catch(error => console.error(error))
            .finally(() => setLoad(false));
    }

    useEffect(() => {
        verifyPermission();
        fetchData();
    }, []);

    function updateMatricula() {
        const upMatricula = {
            aluno_id: alunoId,
            disciplina_id: disciplinaId
        };
    
        Client.put(`matriculas/${matricula.aluno_id}/${matricula.disciplina_id}`, upMatricula)
            .then(() => setShow(true))
            .catch(error => console.error(error));
            navigate('/matriculas');
    }
    

    const handleClose = () => {
        setShow(false);
        navigate('/matriculas');
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
                    )
                    : (
                        <Container className='mt-2'>
                            <Label>Aluno</Label>
                            <Select disabled value={alunoId}>
                                {
                                    alunos.map((aluno, index) => (
                                        <option key={index} value={aluno.id}>
                                            {aluno.nome}
                                        </option>
                                    ))
                                }
                            </Select>

                            <Label>Disciplina</Label>
                            <Select
                                name="disciplina"
                                id="disciplina"
                                value={disciplinaId}
                                onChange={(e) => {
                                    const selectedDisciplinaId = e.target.value;
                                    const selectedDisciplina = disciplinas.find(d => d.id == selectedDisciplinaId);
                                    setDisciplinaId(selectedDisciplinaId);
                                    if (selectedDisciplina) {
                                        setCursoId(selectedDisciplina.curso_id);
                                    }
                                }}
                            >
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
                            <Submit value="Alterar" onClick={() => updateMatricula} />
                        </Container>
                    )
            }

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Atualização - Matrícula</Modal.Title>
                </Modal.Header>
                <Modal.Body>Operação efetuada com sucesso!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}