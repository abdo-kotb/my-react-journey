import InitInput from './InitInput';
import Button from '../UI/Button';
import Card from '../UI/Card';

import { useState, useRef } from 'react';
import ErrorModal from '../errors/ErrorModal';

const AddUser = function (props) {
  const [error, setError] = useState('');

  const userNameRef = useRef();
  const userAgeRef = useRef();

  const removeErrorHandler = function () {
    setError(null);
    console.log('e');
  };

  const userDetailsHandler = function (e) {
    e.preventDefault();

    const userName = userNameRef.current.value;
    const userAge = userAgeRef.current.value;

    if (!userName.trim() || !userAge) {
      setError({
        title: 'Invalid Input',
        body: 'Please enter a valid name and age (non-empty values)',
      });
      userNameRef.current.value = '';
      userAgeRef.current.value = '';
      return;
    }
    if (userAge < 1) {
      setError({
        title: 'Invalid Age',
        body: 'Please enter a valid age (s> 0)',
      });
      userNameRef.current.value = '';
      userAgeRef.current.value = '';
      return;
    }
    props.onFormSubmit(userName, userAge);
    userNameRef.current.value = '';
    userAgeRef.current.value = '';
  };

  return (
    <>
      {error && (
        <ErrorModal title={error.title} onErrorClear={removeErrorHandler}>
          {error.body}
        </ErrorModal>
      )}

      <form onSubmit={userDetailsHandler}>
        <Card>
          <InitInput type="text" forLabel="username" inputRef={userNameRef}>
            Username
          </InitInput>
          <InitInput type="number" forLabel="userage" inputRef={userAgeRef}>
            Age (Years)
          </InitInput>
          <Button>Add User</Button>
        </Card>
      </form>
    </>
  );
};

export default AddUser;
