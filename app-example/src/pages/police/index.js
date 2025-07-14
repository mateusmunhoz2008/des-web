import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import { police } from '../../utils/datatest';

export default function Police() {

    return (
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <DataTable 
                    title="Policiais Ativos" 
                    rows={['Nome', 'Regional', 'Ações']}
                    hide={[false, true, false]}
                    data={police}
                    keys={['name', 'regional']}
                />
            </Container>
        </>
    )
}

