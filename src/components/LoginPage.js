import { useContext } from "react";
import { DataContext } from "./DataContextProvider";
import { Field, Formik, Form } from "formik";
import * as yup from 'yup';

const LoginPage = ({onClose})=>{

  const {updateName, updateLoginStatus} = useContext(DataContext);

  const initialValues = {
    phoneNumber: "",
    name: "",
    email: "",
  };

  const handleClose=()=>{
    onClose();
  }

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Enter your phone number")
    .matches(/^\d{10}$/, 'Invalid phone number format'),
    name: yup.string().required("Enter your name"),
    email: yup.string().required("Invalid email address")
  });

  const handleFocus = (e)=>{
    e.target.nextElementSibling.classList.add('labelOnFocus');
  }

  const handleBlur = (e)=>{
    if(e.target.value==='')
      e.target.nextElementSibling.classList.remove('labelOnFocus');
  }

  const onLogin = (values, { setSubmitting }) => {
    updateName(values.name);
    updateLoginStatus("Logout");
    onClose(); 
    setSubmitting(false);
  }

  return(
    <div className="loginPage">
      <div className="loginPage__leftSection" onClick={onClose}></div>
      <div className="loginPage__rightSection">
        <div className="loginPage__rightSection__details">
          <span className="loginPage__rightSection__details__closeBtn" onClick={handleClose}></span>
          <div className="loginPage__rightSection__details__container">
            <div className="loginPage__rightSection__details__container__title">Login</div>
            <div className="loginPage__rightSection__details__container__imgContainer">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="image"/>
            </div>
          </div>
        </div>
        <Formik initialValues={initialValues}  validationSchema={validationSchema} 
          onSubmit={onLogin}
        >
          {({ values, touched, errors })=>(
            <Form className="loginPage__rightSection__form">
              <div className="loginPage__rightSection__form__field">
                <Field className="loginPage__rightSection__form__field__input" 
                  type="tel" 
                  name="phoneNumber" 
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`loginPage__rightSection__form__field__label ${errors.phoneNumber && touched.phoneNumber ? 'validationError' : ''}${values.name !== '' ? 'labelOnFocus' : ''}`}
                  htmlFor="mobile"
                >
                  {errors.phoneNumber  && touched.phoneNumber ? errors.phoneNumber : "Phone Number"}
                </label>
              </div>
              <div className="loginPage__rightSection__form__field">
                <Field className="loginPage__rightSection__form__field__input" 
                  type="text" 
                  name="name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`loginPage__rightSection__form__field__label ${errors.name && touched.name ? 'validationError' : ''} ${values.name !== '' ? 'labelOnFocus' : ''}`}
                  htmlFor="name"
                >
                  {errors.name  && touched.name ? errors.name : "Name"}
                </label>
              </div>
              <div className="loginPage__rightSection__form__field">
                <Field className="loginPage__rightSection__form__field__input" 
                  type="email" 
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`loginPage__rightSection__form__field__label ${errors.email && touched.email ? 'validationError' : ''} ${values.name !== '' ? 'labelOnFocus' : ''}`}  
                  htmlFor="email"
                >
                  {errors.email  && touched.email ? errors.email : "Email"}
                </label>
              </div>
              <button className="loginPage__rightSection__form__submitBtn" type="submit">CONTINUE</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default LoginPage;