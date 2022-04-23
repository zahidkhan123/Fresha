// ** React Import
import { useState } from "react";
import Flatpickr from "react-flatpickr";

// ** Custom Components
import Sidebar from "@components/sidebar";

// ** Utils
import { isObjEmpty } from "@utils";

// ** Third Party Components
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, FormText, Form, Input } from "reactstrap";

// ** Store & Actions
import { addUser } from "../store/action";
import { useDispatch } from "react-redux";
import "@styles/react/libs/flatpickr/flatpickr.scss";

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState("subscriber");
  const [plan, setPlan] = useState("basic");
  const [endPicker, setEndPicker] = useState(new Date());
  const [startPicker, setStartPicker] = useState(new Date());
  // ** Store Vars
  const dispatch = useDispatch();

  // ** Vars
  const { register, errors, handleSubmit } = useForm();

  // ** Function to handle form submit
  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      toggleSidebar();
      dispatch(
        addUser({
          fullName: values["full-name"],
          company: values.company,
          role,
          username: values.username,
          country: values.country,
          contact: values.contact,
          email: values.email,
          currentPlan: plan,
          status: "active",
          avatar: "",
        })
      );
    }
  };

  return (
    <Sidebar
      size="lg"
      open={open}
      title="New User"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="first name">
            First Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="first name"
            id="first name"
            // placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["first name"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Last name">
            Last name <span className="text-danger">*</span>
          </Label>
          <Input
            name="Last name"
            id="Last name"
            // placeholder='johnDoe99'
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Last name"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Team member title">
            Team member title <span className="text-danger">*</span>
          </Label>
          <Input
            type="Team member title"
            name="Team member title"
            id="Team member title"
            // mailto:placeholder="john.doe@example.com"
            innerRef={register({ required: true })}
            className={classnames({
              "is-invalid": errors["Team member title"],
            })}
          />
          <FormText color="muted">
            This title will be visible to clients
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="Notes (optional)">
            Notes (optional) <span className="text-danger"></span>
          </Label>
          <Input
            name="Notes"
            id="Notes"
            // placeholder="Company Pvt Ltd"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Notes"] })}
          />
        </FormGroup>
        <FormGroup>
          <h5>Contact</h5>
          <p>
            Team member contacts are confidential and won't be shared with your
            clients.
          </p>
          <Label for="Email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input
            name="Email"
            id="Email"
            placeholder="mail@example.com"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Email"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Mobile number">
            Mobile number <span className="text-danger">*</span>
          </Label>
          <Input
            name="Mobile number"
            id="Mobile number"
            // placeholder="(397) 294-5153"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Mobile number"] })}
          />
        </FormGroup>
        <FormGroup>
          <h5>Employment</h5>
          <Label for="startDate">Start date</Label>
          <Flatpickr
            required
            id="startDate"
            name="startDate"
            className="form-control"
            onChange={(date) => setStartPicker(date[0])}
            value={startPicker}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">End Date</Label>
          <Flatpickr
            required
            id="endDate"
            // tag={Flatpickr}
            name="endDate"
            className="form-control"
            onChange={(date) => setEndPicker(date[0])}
            value={endPicker}
          />
        </FormGroup>
        <div className="d-flex">
          <Button
            type="submit"
            className="mr-1 button_slide slide_right "
            color="dark"
          >
            <span> Submit </span>
          </Button>
          <Button
            type="reset"
            color="secondary"
            outline
            onClick={toggleSidebar}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Sidebar>
  );
};

export default SidebarNewUsers;
