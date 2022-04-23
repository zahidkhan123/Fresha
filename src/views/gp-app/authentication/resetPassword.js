import { useState, useContext, Fragment, useEffect } from "react";
import classnames from "classnames";
import Avatar from "@components/avatar";
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast, Slide } from "react-toastify";
import { AbilityContext } from "@src/utility/context/Can";
import { Link, useHistory, Redirect } from "react-router-dom";
import InputPasswordToggle from "@components/input-password-toggle";
import { ChangePasswordAction } from "../../../redux/actions/userActions";
import { isUserLoggedIn } from "@utils";
import { getHomeRouteForLoggedInUser, isObjEmpty } from "@utils";
import {
  Facebook,
  Twitter,
  Mail,
  GitHub,
  HelpCircle,
  Coffee,
  Instagram,
} from "react-feather";
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
// import  {ReactComponent as FacebookLogo} from '@src/assets/images/icons/facebook-icon.svg'
import "@styles/base/pages/page-auth.scss";

const ToastContent = ({ message }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title font-weight-bold"> {message}</h6>
      </div>
    </div>
  </Fragment>
);

const Reset = (props) => {
  const [skin, setSkin] = useSkin();
  const otpVerify = useSelector((state) => state.otp);
  const resetPassword = useSelector((state) => state.changePassword);
  const { loading, success } = resetPassword;

  const ability = useContext(AbilityContext);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    if (success) {
      reset();
      history.push("/login");
    }
  }, [success]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

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

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      dispatch(
        ChangePasswordAction({
          password: data.password,
          confirmPassword: data.confirmPassword,
        })
      );
    } else {
      toast.error(<ToastContent message={"Password not match"} />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  if (!isUserLoggedIn() && otpVerify?.success) {
    return (
      <div className="auth-wrapper auth-v2">
        <Row className="auth-inner m-0">
          <Link
            className="brand-logo"
            to="/"
            onClick={(e) => e.preventDefault()}
          >
            <img className="img-fluid" src={source1} alt="Login V2" />
          </Link>
          <Col
            className="d-none d-lg-flex align-items-center p-5"
            lg="8"
            sm="12"
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img className="img-fluid" src={source} alt="Login V2" />
            </div>
          </Col>
          <Col
            className="d-flex align-items-center auth-bg px-2 p-lg-5"
            lg="4"
            sm="12 bg-warning"
          >
            <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
              <CardTitle className=" mb-10 text-dark font-weight-bold display-3">
                Reset Password
              </CardTitle>

              <Form
                className="auth-login-form mt-2"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                  <Label
                    className="form-label text-dark font-weight-bold blockquote "
                    for=""
                  >
                    Confirm Password
                  </Label>

                  <InputPasswordToggle
                    // value={confirmPassword}
                    id="register-confirmPassword"
                    name="confirmPassword"
                    // placeholder='Confirm Password'
                    //  className='input-group-merge'
                    // onChange={e => setConfirmPassword(e.target.value)}
                    className={classnames({
                      "is-invalid input-group-merge": errors["confirmPassword"],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== "",
                    })}
                  />
                </FormGroup>
                <Button.Ripple type="submit" color="dark" className="p-1" block>
                  <small className="blockquote font-weight-bold">Submit</small>
                </Button.Ripple>
              </Form>
            </Col>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <Redirect to="/forgot-password" />;
  }
};

export default Reset;
