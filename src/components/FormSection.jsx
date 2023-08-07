import Logo from "../assets/login-logo.png";

const FormSection = () => {
  return (
    <div className='box-a'>
      <img src={Logo} alt='' />
      <div className='form'>
        <label htmlFor='Email or Username'>Email or Username</label>
        <input type='text' />
        <label htmlFor='Password'>Password</label>
        <input type='text' />
        <button>Sign in</button>
      </div>
      <div className='form-info'>
        <a href=''>Forgot password?</a>
        <a href=''>Sign in with company or school</a>
        <hr />
        <button>Create an account</button>
      </div>
      <footer>
        <p>Copyright © 2004 - 2023 Pluralsight LLC. All rights reserved.</p>
        <a href=''>Terms of Use | Privacy Policy</a>
      </footer>
    </div>
  );
};
export default FormSection;
