// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch } from 'react-redux'
import { duration } from 'moment'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')
  const [desc, setDesc] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [duration, setDuration] = useState("")

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addUser({
          fullName: values['full-name'],
          company: values.company,
          role,
          username: values.username,
          country: values.country,
          contact: values.contact,
          email: values.email,
          currentPlan: plan,
          status: 'active',
          avatar: ''
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='full-name'>
            Service Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='full-name'
            id='full-name'
            placeholder='Hair cut'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['full-name'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>Treatment Type</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Hair </option>
            <option value='editor'>Face</option>
            <option value='maintainer'>Body</option>
            <option value='author'>Counselling & Holistic</option>
            <option value='admin'>Massage</option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Label for='username'>
            Service Category <span className='text-danger'>*</span>
          </Label>
          <Input
            name='username'
            id='username'
            placeholder='johnDoe99'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['username'] })}
          />
        </FormGroup> */}
        
          <FormGroup>
          <Label for='duration'>Service Duration</Label>
          <Input type='select' id='duration' name='duration' value={duration} onChange={e => setRole(e.target.value)}>
            <option value = "30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value='60'>01 Hour</option>
            <option value='90'>1.5 Hours</option>
            <option value='120'>02 Hours</option>
            <option value='150'>2.5 Hours</option>
            <option value='180'>03 Hours</option>

          </Input>
        </FormGroup>

         
        <FormGroup>
          <Label for='user-role'>Service available for</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Everyone</option>
            <option value='editor'>Females only</option>
            <option value='maintainer'>Males only</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>Staff </Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option>
            <option value='admin'>Admin</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='company'>
            Price <span className='text-danger'>*</span>
          </Label>
          <Input
            name='company'
            id='company'
            placeholder='PKR 100'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['company'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Status">Status</Label>
          <Input
            type="select"
            id="Status"
            name="Status"
            placeholder="Select Status"
          >
            <option value="" disabled selected hidden>
              Select Status
            </option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Input>
        </FormGroup>
       <div className='d-flex'>
          <Button type='submit' className='mr-1 button_slide slide_right' color='dark'>
              <span>Submit</span>
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </div>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
