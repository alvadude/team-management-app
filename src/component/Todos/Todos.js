import styles from './Todos.module.css';
import { 
    TableContainer, 
    Table, 
    TableBody, 
    Paper,  
    TableRow,
    TableCell
} from '@mui/material';

const Todos = (props) => {
 
  const todos = [
      {
        name: "Task1"
      },
      {
        name: "Task2"
      },
      {
        name: "Task3"
      },
      {
        name: "Task4"
      },
      {
        name: "Task5"
      },
      {
        name: "Task6"
      },
      {
        name: "Task7"
      },
      {
        name: "Task8"
      },
  ]

  return (
     <div className={styles.Todos}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
            {todos.map((row, index) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
    
              <TableCell align="left">{index +1 }. {row.name}</TableCell>
            </TableRow>
             ))}
            </TableBody>
          </Table>
        </TableContainer>
     </div>
  )
}

export default Todos;