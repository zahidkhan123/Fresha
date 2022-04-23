import { useEffect, useState } from 'react'
import { isUserLoggedIn } from '@utils'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Link, Redirect,useHistory } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import { useSelector,useDispatch } from 'react-redux'
import { verifyPin } from '../../../redux/actions/userActions'
const OtpVerification = () => {
  const [skin, setSkin] = useSkin()
  // const [time, setTime] = useState(30)
  const forgetPass = useSelector((state) =>  state.Forget)
  const otpVerify=useSelector((state) => state.otp)
  const {loading,success}=otpVerify
  // console.log(otpVerify)
  const { register, formState: {errors}, handleSubmit, reset } = useForm()

  const dispatch = useDispatch();
  const history = useHistory()

  // useEffect(() => {
  //   var refreshId = setInterval(function() {
  //     if (time === 0) {
  //       clearInterval(refreshId);
  //     }
  //     setTime(prevState => prevState - 1);
  //     console.log(time)
  //   }, 1000);
  // }, [time])

  useEffect(()=>{if(success){ 
     reset();
     history.push('/reset')
     
}},[success])
  const illustration = skin === 'semi-dark' ? 'login-img.svg' : 'forgot-password-v2.svg',
  source = require(`@src/assets/images/pages/${illustration}`).default
  
  const illustration1 = skin === 'semi-dark' ? 'logo-login.svg' : 'login-v2.svg',
    source1 = require(`@src/assets/images/pages/${illustration1}`).default

const normalizeCardNumber = (value) => {
  console.log(value)
  return value.substr(0,4) || ""
}
  const submitOTP = (data) => {
  dispatch(verifyPin({verifyOtp:data.otp}));
  console.log("phone", data)
  }
  if (!isUserLoggedIn() && forgetPass?.userData?.success) {
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
                OTP!
              </CardTitle>
              <CardText className='text-dark mb-2 blockquote font-weight-bold'>
                Enter your OTP here
              </CardText>
              <Form  className='auth-forgot-password-form mt-2' onSubmit={handleSubmit(submitOTP)}>
                <FormGroup>
                  {/* <Label className='form-label text-dark font-weight-bold blockquote' for='login-email'>
                    Enter OTP
                  </Label> */}
                  <Input
                  autoFocus
                  placeholder="XXXX"
                 type="tel"
                 inputMode="numeric" 
                  id='otpNumber'
                  name='otp' 
            onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeCardNumber(value)
          }}                                 
          className={classnames({ 'is-invalid': errors['otp'] })}
                  innerRef={register({ required: true, validate: value => value !== '',pattern: /^([0-9]{4})$/g })}
                  />
             {errors.phone?.type === "required" && (
                    <small className="text-danger">Required Field</small>
                  )}                
                </FormGroup>
                <Button.Ripple type='submit' color='dark' className='p-1 mt-2' block>
                  <small className='blockquote'>Submit  </small>
                </Button.Ripple>
              </Form>
              {/* <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='mr-25 bg-light' size={14} />
                  <span className='align-middle text-white'>Back to login</span>
                </Link>
              </p> */}
            </Col>
          </Col>
        </Row>
      </div>
    )
  } else {
    return <Redirect to='/forgot-password' />
  }
}

export default OtpVerification
