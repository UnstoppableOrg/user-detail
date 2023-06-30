import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Address: '',
            country: '',
            Hobbies: '',
            Gender: '',
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
            <form onSubmit={formik.handleSubmit} className='place-content-center'>
                <div className=' bg-sky-400  p-10 mt-20 mx-64 rounded-md drop-shadow-2xl'>
                    <div className='flex'>
                    <label htmlFor="UserName" className='w-36'>UserName:</label>
                    <input
                        className='w-full rounded '
                        id="UserName"
                        name="UserName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.UserName}
                    />
                    </div><br/>
                    <div className='flex'>  
                        <label htmlFor="Gender" className='w-28'>Gender:</label><br />
                    <input
                        id='Gender'
                        name='Gender'
                        type='radio'
                        onChange={formik.handleChange}
                        value="Male"
                    />
                    <label className='pr-4'>Male</label>
                    <input
                        id='Gender1'
                        name='Gender'
                        type='radio'
                        onChange={formik.handleChange}
                        value="Female"
                    />
                    <label>Female</label></div><br/>
                    <div className='flex'>
                        <label htmlFor="country" className='w-36'>Country:</label>
                    <select
                        className='w-full rounded'
                        id="country"
                        name="country"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.country}>
                        <option value="India">India</option>
                        <option value="United State">United State</option>
                        <option value="Uk">Uk</option>
                        <option value="UAE">UAE</option>
                        <option value="Tailand">Tailand</option>
                        <option value="Russia">Russia</option>
                    </select></div><br/>

                    <div className='flex'>
                    <label htmlFor="Address" className='w-36'>Address:</label>
                    <textarea
                        className='w-full rounded'
                        id="Address"
                        name="Address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Address}
                    />
                    </div><br/>
                    

                   

                <div className='flex'>
                <label htmlFor="Hobbies" className='w-36'>Hobbies:</label>
                    <select
                        multiple
                        className='w-full rounded'
                        id="Hobbies"
                        name="Hobbies"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Hobbies}>
                        <option value="Coding">Coding</option>
                        <option value="Learning">Learning</option>
                        <option value="Cricket">Cricket</option>
                    </select>
                </div>

                    <div className='text-center'><button type="submit" className='bg-black w-20 rounded mt-4 text-white'>Submit</button></div>
                </div>
            </form>
        </>
    );
};
export default SignupForm;