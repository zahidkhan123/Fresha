import { useEffect } from 'react'
import { isUserLoggedIn } from '@utils'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import { useDispatch,useSelector } from 'react-redux'
import { forgotPasswordAction } from '@store/actions/userActions'

const ForgotPassword = () => {
  const [skin, setSkin] = useSkin()
  const forgetPass = useSelector((state) =>  state.Forget)
 
  const { register, formState: {errors}, handleSubmit, reset } = useForm()
  const dispatch = useDispatch();
  const history=useHistory()
useEffect(()=>{if(forgetPass?.userData?.success){ 
        reset();
     history.push('/OTP')
     
}},[forgetPass?.userData?.success])

  const illustration = skin === 'semi-dark' ? 'login-img.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  
  const illustration1 = skin === 'semi-dark' ? 'logo-login.svg' : 'login-v2.svg',
    source1 = require(`@src/assets/images/pages/${illustration1}`).default

const normalizeCardNumber = (value) => {
  return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 13) || ""
}
  const submitNumber = (data) => {
    dispatch(forgotPasswordAction({contactNumber:data.phone}))
  }
  if (!isUserLoggedIn()) {
    return (
      <div className='auth-wrapper auth-v2'>
        <Row className='auth-inner m-0'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
            
            <img className='img-fluid' src={source1} alt='Login V2' />
          </Link>
          <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
            <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
          
              <img className='img-fluid' src={source} alt='Login V2' />
            </div>
          </Col>
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12 bg-warning'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='text-dark font-weight-bold mb-2 display-4'>
                Forgot Password? 🔒
              </CardTitle>
              <CardText className='text-dark mb-2 blockquote font-weight-bold'>
                Enter your phone and we'll send you OTP to reset your password
              </CardText>
              <Form  className='auth-forgot-password-form mt-2' onSubmit={handleSubmit(submitNumber)}>
                <FormGroup>
                  <Label className='form-label text-dark font-weight-bold blockquote' for='login-email'>
                    Contact Number
                  </Label>
                  <Input
                  autoFocus
                  placeholder="0300 XXXX XXX"
                 type="tel"
                 inputMode="numeric" 
                  id='phoneNumber'
                  name='phone' 
            onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeCardNumber(value)
          }}                                 
          className={classnames({ 'is-invalid': errors['phone'] })}
                  innerRef={register({ required: true, validate: value => value !== '',pattern: /^(?!.*[A-Za-z]).*$/g })}
                  />
                  {/* {errors.phone?.type === 'required' && <small className='text-white bg-danger'>Contact Number is required</small>} */}
                
                </FormGroup>
               
                     <Button.Ripple type='submit' color='dark' className='p-1 mt-2' block>
                    <small className='blockquote text-white'>Send OTP </small>
                </Button.Ripple>
              </Form>
              <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='mr-25 bg-light' size={14} />
                  <span className='align-middle text-white'>Back to login</span>
                </Link>
              </p>
            </Col>
          </Col>
        </Row>
      </div>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default ForgotPassword
