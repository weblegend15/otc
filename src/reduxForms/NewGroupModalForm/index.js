import { reduxForm } from 'redux-form';
import NewGroupModalForm from './NewGroupModalForm';

const withReduxform = reduxForm({
  form: 'newGroupModalForm',
})(NewGroupModalForm);

export default withReduxform;
