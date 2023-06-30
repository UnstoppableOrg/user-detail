import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm()
    },
  });

//   const reset = form({
//     firstName : "",
//     lastName:"",
//     email:"",
//   })
  return (
    <>
    <div className='bg-black text-white h-14 text-[40px] text-center '><h1>User Details</h1></div>
    <form  onSubmit={formik.handleSubmit} className='place-content-center'>
      <div className='w-[800px] bg-sky-400 text-center p-10 mt-24 ml-64'>
        <label htmlFor="firstName">First Name:</label>
      <input
      className='w-full rounded'
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
      className='w-full rounded'
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address:</label>
      <input
      className='w-full rounded'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit" className='bg-black w-20 rounded mt-4 text-white'>Submit</button>
      </div>
    </form>
    </>
  );
};
export default SignupForm;