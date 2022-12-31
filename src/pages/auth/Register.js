import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import styles from './auth.module.scss';
import register from '../../assets/register.png';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <Card>
    <div className={styles.form}>
      <h2>Register</h2>
        <form>
          <input type='text' placeholder='Email' required/>
          <input type='password' placeholder='Password' required/>
          <input type='password' placeholder='Confirm Password' required/>
          <button className='--btn --btn-primary --btn-block'>Register</button>
      </form>
      <span className={styles.register}>
        <p>Already have an account? </p>
        <Link to='/login'>Login</Link>
      </span>
    </div>
    </Card>
    <div className={styles.img}>
      <img width='400' src={register} alt="register" />
    </div>
  </section>
  )
}

export default Register