import { Form, redirect, useNavigation, Link, useActionData } from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, FormRow } from "../components"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);


  const errors = {msg: ''}
  if(data.password.length < 3){
    errors.msg = 'password too short'
    return errors
  }

  try{
    await customFetch.post('/auth/login', data)
    toast.success('Login successful')
    return redirect('/dashboard/tests');
  }catch(error){
    toast.error(error?.response?.data?.msg)
    errors.msg = error?.response?.data?.msg
    return error
  }

}

const Login = () => {

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const errors = useActionData();



  return (
    <Wrapper className='bg-[#201c1c]'>
      <Form method='post' className="form bg-stone-900">
        {/* <Logo/> */}
        <h4 >login</h4>
        {errors?.msg && <p style ={{color: 'red'}}>{errors.msg}</p>}
        <p></p>
        <FormRow type="email" name="email" defaultValue='john@gmail.com'/>
        <FormRow type="password" name="password" defaultValue="secret123"/>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting?'submitting...':'submit'}
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>

        <p>
          Not a member yet ?
          <Link to='/register' className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login