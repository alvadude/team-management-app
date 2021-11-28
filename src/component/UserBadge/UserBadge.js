import { Avatar } from '@mui/material';
import styles from './UserBadge.module.css';


function UserBadge() {
  return (
    <div className={styles.Badge}>
       <Avatar>XL</Avatar>
       <span>Alva</span>
    </div>
  );
}


export default UserBadge;