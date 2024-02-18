
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {

  const submit = useSubmit();
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
     

  
      
          <FormRowSelect
            labelText='job type'
            name='jobType'
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue='all'
            onChange={(e) => {
              submit(e.currentTarget.form)
            }}
          />
      

          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>
          <button type="submit" className="btn form-btn delete-btn">
          submit
        </button>
          {/* TEMP!!!! */}
          
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;