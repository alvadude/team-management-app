import styles from './Calendar.module.css';
import { Grid, Paper } from '@mui/material';


const Calendar = (props) => {

   return (
    <div className={styles.Calendar}>
    <h3>November</h3>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29, 30, 31].map((value) => (
            <Grid key={value} item>
                <Paper sx={{ height: 113, width: 100 }}> {value} </Paper>
            </Grid>
          ))}
         </Grid>
        </Grid>
      </Grid>
    </div>
   )
}

export default Calendar;