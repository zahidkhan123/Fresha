import { Fragment, useState, useContext, useEffect } from "react";
import { isObjEmpty } from "@utils";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";
import { useDispatch,useSelector } from "react-redux";
import { useForm } from "react-hook-form";
// import { loginAction } from "@store/actions/userActions";
import {SignupAction} from "@store/actions/userActions"
import { Link, useHistory } from "react-router-dom";
import { AbilityContext } from "@src/utility/context/Can";
import InputPasswordToggle from "@components/input-password-toggle";
// import { Facebook, Twitter, Mail, GitHub, Instagram } from 'react-feather'
import {
  Row,
  Col,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  Button,
  Form,
  Input,
  CustomInput,
} from "reactstrap";

import "@styles/base/pages/page-auth.scss";
import { event } from "jquery";
import { BranchSignupAction, SalonSignupAction } from "../../../redux/actions/saloonActions";
const Register = () => {
  const ability = useContext(AbilityContext);

  const [skin, setSkin] = useSkin();

  const history = useHistory();
  const Saloon = useSelector((state) =>  state.Signup)
  const {error,loading}=Saloon 
  // const saloon_ID = Saloon?.SaloonInfo?.data?.id;

  // console.log( saloonSuccess, saloon_ID);
  const dispatch = useDispatch();
   useEffect(()=>{if(Saloon?.userInfo?.success){ 
     reset();
     history.push('/')
}},[Saloon?.userInfo?.success])
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

 
  const [valErrors, setValErrors] = useState({});
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');


 
  const illustration = skin === "semi-dark" ? "login-img.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const illustration0 =
      skin === "semi-dark" ? "logo-login.svg" : "login-v2.svg",
    source1 = require(`@src/assets/images/pages/${illustration0}`).default;

  const illustration1 =
      skin === "semi-dark" ? "facebook-icon.svg" : "login-v2.svg",
    logo1 = require(`@src/assets/images/icons/${illustration1}`).default;

  const illustration2 =
      skin === "semi-dark" ? "gmail-icon.svg" : "login-v2.svg",
    logo2 = require(`@src/assets/images/icons/${illustration2}`).default;
  const illustration3 =
      skin === "semi-dark" ? "twitter-icon.svg" : "login-v2.svg",
    logo3 = require(`@src/assets/images/icons/${illustration3}`).default;
  const illustration4 =
      skin === "semi-dark" ? "instagram-icon.svg" : "login-v2.svg",
    logo4 = require(`@src/assets/images/icons/${illustration4}`).default;

  const Terms = () => {
    return (
      <Fragment>
        <p className=" display-5 text-dark justify-content-center font-weight-bold">
          I agree to privacy policy & terms
        </p>
      </Fragment>
    );
  };

  const onSubmit =   (data) => {
    const Data={
      salonTitle : data.SaloonName,
      branchLocation : data.address,
      contactNumber :data.phone,
      firstName : data.firstName,
      lastName:data.lastName,
      email : data.email,
      password :data.password,
    }
    console.log(Data)    
    

    // dispatch(SignupAction(Data));
    
  };

     // function for going to next step by increasing step state by 1
  const nextStep = (e) => {

    setStep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1);
  };
   
//   const handleSaloonChange=(value) => {
//   setName(value)
//   }
  
// const handleAddressChange=(value) => {
//     setAddress(value)
//   }
  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 13) || ""
    );
  };

  
  

  return (
    <Fragment>
      <div className="auth-wrapper auth-v2 ">
        <div className="auth-inner m-0">
          {/* <Link
          className="brand-logo"
          to="/"
          onClick={(e) => e.preventDefault()}
        >
          <img className="img-fluid" src={source1} alt="Login V2" />
        </Link> */}
          <Col
            className="d-none d-lg-flex align-items-center p-5"
            lg="8"
            sm="12"
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img className="img-fluid" src={source} alt="Login V2" />
            </div>
          </Col>
          
          <PerfectScrollbar className="w-100" >  
          <Col
            className="d-flex align-items-center justify-content-center auth-bg px-5 p-lg-5 bg-warning"
            lg="12"
            sm="12"
            >
            <Col className="w-100" sm="8" md="6" lg="12">

              <CardTitle
                tag="h3"
                className=" text-dark font-weight-bold display-4 "
              >
                Sign Up
              </CardTitle>
              
              
              <Form
                action="/"
                className="auth-register-form my-2 "
                onSubmit={handleSubmit(onSubmit)}
              >
        {step === 1 &&  (
    <div style={{height:'100vh'}}>
    <CardTitle
                  tag="h3"
                  className="text-dark font-weight-bold font-medium-5"
                >
                  Saloon Info
                </CardTitle>
                <FormGroup >
                    <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-fullName"
                  >
                    Saloon Name
                  </Label>
                 
                  <Input
                    autoFocus
                    type="text"
                    // value={fullName}
                    placeholder="Enter Name"
                    id="register-SaloonName"
                    name="SaloonName"
                    value={name}
                    // onChange={(event) => {
                    //   const { value } = event.target;
                    //   // console.log(value)
                    //   handleSaloonChange(value);
                    // }}                    
                    className={classnames({ "is-invalid": errors["SaloonName"] })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "" 
                    })}
                  />
                  {errors.SaloonName?.type === "required" && (
                    <small className="text-danger">Required Field</small>
                  )}
                  {Object.keys(valErrors).length && valErrors.SaloonName ? (
                    <small className="text-danger">{valErrors.SaloonName}</small>
                  ) : null}
                </FormGroup>
                <FormGroup>
                 <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-username"
                  >
                     Address
                  </Label>
                  <Input
                    type="text"
                    // value={username}
                    placeholder="Enter Address"
                    id="register-address"
                    name="address"
                    value={address}
                    // onChange={(event) => {
                    //   const { value } = event.target;
                    //   handleAddressChange(value);
                    // }}                     
                     className={classnames({ "is-invalid": errors["address"] })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "",
                  
                    })}
                  />
                  {errors.address?.type === "required" ? (
                    <small className="text-danger">Required Field</small>):null
                  }
                  {Object.keys(valErrors).length && valErrors.address ? (
                    <small className="text-danger">{valErrors.address}</small>
                  ) : null}
                </FormGroup>
                
                       <Button.Ripple
                    block
                    className="p-1 mt-2"
                    color="dark"
                    onClick = {nextStep}
                  >
                    <small
                      className="blockquote font-weight-bold"
                      color="white"
                    >
                      Next
                    </small>
                  </Button.Ripple>
                   <p className="text-center mt-2">
                <span className=" text-white font-weight-bold">
                  Already have an account?
                </span>
                <Link to="/login">
                  <span className="text-dark font-medium-1 font-weight-bold">
                    {" "}
                    Sign In
                  </span>
                </Link>
              </p>
             </div>
             )}
  
              
{step === 2 && (<div> 
                <CardTitle
                  tag="h3"
                  className="text-dark font-weight-bold font-medium-5"
                >
                  Personal Info
                </CardTitle>
               <FormGroup>
                 <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-username"
                  >
                    First Name
                  </Label>
                  <Input
                    type="text"
                    // value={username}
                    placeholder="First Name"
                    id="register-firstName"
                    name="firstName"
                    // onChange={handleUsernameChange}
                    className={classnames({ "is-invalid": errors["firstName"] })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "",
                  
                    })}
                  />
                  {errors.firstName?.type === "required" ? (
                    <small className="text-danger">Required Field</small>):null
                  }
                  {Object.keys(valErrors).length && valErrors.firstName ? (
                    <small className="text-danger">{valErrors.firstName}</small>
                  ) : null}
                </FormGroup>

                <FormGroup>
                 <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-username"
                  >
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    // value={username}
                    placeholder="Last Name"
                    id="register-lastName"
                    name="lastName"
                    // onChange={handleUsernameChange}
                    className={classnames({ "is-invalid": errors["lastName"] })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "",
                  
                    })}
                  />
                  {errors.lastName?.type === "required" ? (
                    <small className="text-danger">Required Field</small>):null
                  }
                  {Object.keys(valErrors).length && valErrors.lastName ? (
                    <small className="text-danger">{valErrors.lastName}</small>
                  ) : null}
                </FormGroup>

                <FormGroup>
                    <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-phone"
                    >
                    Contact Number
                  </Label>
                  <Input
                    // value={phone}
                    placeholder="0300 XXXX XXX"
                    type="tel"
                    inputMode="numeric"
                    // autoComplete="cc-number"
                    id="register-phone"
                    name="phone"
                    onChange={(event) => {
                      const { value } = event.target;
                      event.target.value = normalizeCardNumber(value);
                    }}
                    className={classnames({ "is-invalid": errors["phone"] })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "", pattern: /^(?!.*[A-Za-z]).*$/g
                    })}
                    />
                  {errors.phone?.type === "required" && (
                    <small className="text-danger">
                  Required Field                    
                 </small>
                  )}
                  {Object.keys(valErrors).length && valErrors.phone ? (
                    <small className="text-danger">{valErrors.phone}</small>
                    ) : null}
                </FormGroup>

               

                <FormGroup>
                    <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for="register-email"
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    // value={email}
                    id="register-email"
                    name="email"
                    // onChange={handleEmailChange}
                    placeholder="Enter Email"
                    className={classnames({
                      "is-invalid": errors["email"],
                    })}
                    innerRef={register({ required: false })}
                  />
                   {errors.email?.type === "required" ? (
                    <small className="text-danger">Required Field</small>):null
                  }
                  {Object.keys(valErrors).length && valErrors.email ? (
                    <small className="text-danger">{valErrors.email}</small>
                  ) : null}
                </FormGroup>

                <FormGroup>
                <Label className="form-label text-dark font-weight-bold blockquote ">
                    Password
                  </Label>
                  <InputPasswordToggle
                    // value={password}
                    id="register-password"
                    name="password"
                    // placeholder='Password'
                    // className='input-group-merge'
                    // onChange={e => setPassword(e.target.value)}
                    className={classnames({
                      "is-invalid input-group-merge": errors["password"],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "",
                    })}
                  />
                </FormGroup>

                <FormGroup>
                  <CustomInput
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="terms"
                    label={<Terms />}
                    className="custom-control-dark my-2"
                    innerRef={register({ required: true })}
                    // onChange={e => setTerms(e.target.checked)}
                    invalid={errors.terms && true}
                  />
                </FormGroup>
                <Button.Ripple
                    type="submit"
                    block
                    className="p-1"
                    color="dark"
                    onClick = {prevStep}
                  >
                    <small
                      className="blockquote font-weight-bold"
                      color="white"
                    >
                      Previous
                    </small>
                  </Button.Ripple>
                <Button.Ripple type="submit" block className="p-1" color="dark"  >
                  <small className="blockquote font-weight-bold" color="white">
                    Sign Up
                  </small>
                </Button.Ripple> <p className="text-center mt-2">
                <span className=" text-white font-weight-bold">
                  Already have an account?
                </span>
                <Link to="/login">
                  <span className="text-dark font-medium-1 font-weight-bold">
                    {" "}
                    Sign In
                  </span>
                </Link>
              </p>
             </div>)}
               
              
              </Form>
         
             
            </Col>
          </Col>
            </PerfectScrollbar>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
