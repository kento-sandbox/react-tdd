import LabelInput from './LabelInput';

export default class EmailInput extends LabelInput {
  handleChange (event) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = regex.test (event.target.value);
    if (!isEmail) {
      this.setState ({
        value: event.target.value,
        hasError: true,
        errorMessage: 'emailアドレスを入力してください。',
      });
    }
  }
}
