// import styles from './styles/register.module.scss';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');  // Stores Name
    const [email, setEmail] = useState('');  // Stores Email
    const [password, setPassword] = useState('');  // Stores Password
    const [secret, setSecret] = useState('');  // Stores Answer To Question

    // Prevents default browser ehaviour & submits user data to backend
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, password, secret);
        axios.post('http://localhost:3000/api/register', {
            name, email, password, secret
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

  return (
    <div className="_0053">
      <div className="_0053-content">
      <section className="_0053-sect_1">
        <div className="_0053-sect_1-text-box-1">
          <h3 className="_0053-sect_1-text">Register</h3>
        </div>
      </section>
      <section className="_0053-sect_2">
        <div className="_0053-sect_2-form-box">
        {/* <!-- Form Start --> */}
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__group">
                        <label for="name">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form__control" id="name" name="name" autocomplete="off" placeholder="Enter Name"/>
                    </div>

                    <div className="form__group">
                        <label for="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form__control" id="email" name="email" autocomplete="off" placeholder="Enter Email"/>
                    </div>

                    <div className="form__group">
                        <label for="password_1">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form__control" id="password_1" name="password_1" placeholder="Enter Password"/>
                    </div>

                    {/* <div className="form__group form__mb-0">
                        <label for="password_2">Confirm Password</label>
                        <input type="password" className="form__control" id="password_2" name="password_2" placeholder="Confirm Password"/>
                    </div> */}

                    <div className="form__group form__group--select-box">
                        <label for="signUpQuestion">Pick a question</label>
                        <select className="form__control form__control--select-box" id="signUpQuestion" name="signUpQuestion" aria-describedby="form__small-text">
                            <option value="favouriteColour">What is your favourite colour?</option>
                            <option value="bestFriendName">What is your best friend's name?</option>
                            <option value="cityOfBirth">What city were you born in?</option>
                        </select>

                        {/* <div className="form__select-box-icon-box">
                            <svg className="form__select-box-icon">
                                <use xlink:href="/images/sprite.svg#icon-keyboard_arrow_down"></use>
                            </svg>
                        </div> */}

                        <small className="form__small-text">You can use this to reset your password if forgotten</small>
                    </div>

                    <div className="form__group">
                        <label for="signUpQuestionAnswer">Answer here</label>
                        <input value={secret} onChange={e => setSecret(e.target.value)} type="text" className="form__control" id="signUpQuestionAnswer" name="signUpQuestionAnswer" autocomplete="off" placeholder="Write your answer here"/>
                    </div>

                    <div className="form__login-prompt-box">
                        <p className="form__login-prompt">Already have an account? 
                            <a href="#" className="form__login-link">Sign In</a>
                        </p>
                    </div>

                    {/* <!-- Button Start --> */}
                    <button type="submit" className="form__btn form__btn--block form__btn--lg form__btn--dark form__btn--rounded">
                        Register
                    </button>
                    {/* <!-- Button End --> */}
                </form>
                {/* <!-- Form End --> */}
        </div>
      </section>
      {/* <section className={styles._0053_sect_3}>SECTION 3</section> */}

      {/* <!-- Footer Start --> */}
    <footer className="footer _0053-sect_3">
        <div className="footer__box">
            <div className="footer__link-box">
                <a href="#" className="footer__link">Link 1</a>
                <a href="#" className="footer__link">Link 2</a>
                <a href="#" className="footer__link">Link 3</a>
                <a href="#" className="footer__link">Link 4</a>
                <a href="#" className="footer__link">Link 5</a>
                <a href="#" className="footer__link">Link 6</a>
            </div>
        </div>
    </footer>
      {/* <!-- Footer Start --> */}
    
      </div>
    </div>
  );
};

export default Register;
