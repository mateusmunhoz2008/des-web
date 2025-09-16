import { useState, useEffect } from 'react';
import { OrbitProgress } from "react-loading-indicators";
import DataTable from '../../components/datatable';
import Client from '../../api/client';

export default function Accounts() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    function fetchData() {
        setLoad(true);
        console.log("Iniciando fetchData...");

        setTimeout(() => {
            console.log("Timeout concluído, fazendo requisição...");

            Client.get('users')
                .then(res => {
                    console.log("Resposta recebida:", res);
                    console.log("Dados:", res.data);
                    setData(res.data);
                })
                .catch(function (error) {
                    console.log("Erro na requisição:", error);
                    console.log("Status do erro:", error.response?.status);
                    console.log("Mensagem:", error.message);
                })
                .finally(() => {
                    console.log("Finalizando requisição");
                    setLoad(false);
                });
        }, 1000);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            {
                load
                    ?
                    <div className="d-flex justify-content-center mt-5">
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="" textColor="" />
                    </div>
                    :

                    <div className='mt-2'>
                        <DataTable
                            title="Usuários Registrados"
                            rows={['Nome', 'E-mail']}
                            hide={[false, true]}
                            data={data}
                            keys={['name', 'email']}
                            resource='users'
                        />
                    </div>
            }
        </>
    )
}
