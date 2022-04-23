// ** React Import
import { useState } from "react";

// ** Custom Components
import Sidebar from "@components/sidebar";

// ** Utils
import { isObjEmpty } from "@utils";

// ** Third Party Components
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, FormText, Form, Input } from "reactstrap";

// ** Store & Actions
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../redux/actions/categoryActions"

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState("subscriber");
  const [plan, setPlan] = useState("basic");

  // ** Store Vars
  const dispatch = useDispatch();

  // ** Vars
  const { register, errors, handleSubmit } = useForm();

  // ** Function to handle form submit
  const onSubmit = (data) => {
    debugger
    dispatch(addCategory({
      categoryTitle : data.Category_Title
    })) 
    // if (isObjEmpty(errors)) {
    //   toggleSidebar();
    //   dispatch(
    //     addUser({
    //       fullName: values["full-name"],
    //       company: values.company,
    //       role,
    //       username: values.username,
    //       country: values.country,
    //       contact: values.contact,
    //       email: values.email,
    //       currentPlan: plan,
    //       status: "active",
    //       avatar: "",
    //     })
    //   );
    // }
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
          <Label for="Category Title">
            Category Title <span className="text-danger">*</span>
          </Label>
          <Input
            name="Category_Title"
            id="Category_Title"
            placeholder="John Doe"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Category Title"] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Status">Status</Label>
          <Input
            type="select"
            id="Status"
            name="Status"
            placeholder="Select Status"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["Category Status"] })}
          >
            <option value="Active" selected>
              Active
            </option>
            <option value="Pending">Pending</option>
        
            <option value="Inactive">Inactive</option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Label for="email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            mailto:placeholder="john.doe@example.com"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["email"] })}
          />
          <FormText color="muted">
            You can use letters, numbers & periods
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="company">
            Company <span className="text-danger">*</span>
          </Label>
          <Input
            name="company"
            id="company"
            placeholder="Company Pvt Ltd"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["company"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="country">
            Country <span className="text-danger">*</span>
          </Label>
          <Input
            name="country"
            id="country"
            placeholder="Australia"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["country"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact">
            Contact <span className="text-danger">*</span>
          </Label>
          <Input
            name="contact"
            id="contact"
            placeholder="(397) 294-5153"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["contact"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user-role">User Role</Label>
          <Input
            type="select"
            id="user-role"
            name="user-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="subscriber">Subscriber</option>
            <option value="editor">Editor</option>
            <option value="maintainer">Maintainer</option>
            <option value="author">Author</option>
            <option value="admin">Admin</option>
          </Input>
        </FormGroup>
        <FormGroup
          className="mb-2"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <Label for="select-plan">Select Plan</Label>
          <Input type="select" id="select-plan" name="select-plan">
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
            <option value="company">Company</option>
            <option value="team">Team</option>
          </Input>
        </FormGroup> */}
        <div className="d-flex">
          <Button
            type="submit"
            className="mr-1 button_slide slide_right"
            color="dark"
          >
            <span>Submit</span>
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
