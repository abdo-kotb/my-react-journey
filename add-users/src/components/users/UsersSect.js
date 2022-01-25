import Card from '../UI/Card';

import styles from './users-sect.module.css';

const UsersSect = function (props) {
  let content = (
    <li style={{ textAlign: 'center' }}>
      You did not add any users yet. Try adding one!
    </li>
  );

  if (props.items.length > 0) {
    content = props.items.map(user => (
      <li className={styles.user} key={user.id}>
        {user.userName} ({user.userAge} years old)
      </li>
    ));
  }

  return (
    <Card className="users-container">
      <ul className={styles['users-list']}>{content}</ul>
    </Card>
  );
};

export default UsersSect;
