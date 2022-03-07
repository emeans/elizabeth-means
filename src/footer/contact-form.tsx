import React, { FormEvent, Props } from 'react';
import './contact-form.scss';

interface IProps {
}

interface IState {
    name?: string;
    email?: string;
    message?: string;
}

export default class ContactForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // Required for testing form submissions
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    /**
     * Required for testing form submissions.
     * Add 'onSubmit={this.handleSubmit}' to the form tag in order to 
     * view the alert with form values.
     * @param event formEvent
     */
    handleSubmit(formEvent: FormEvent) {
        alert('A name was submitted: ' + this.state.name + ' with email: ' + this.state.email + ' and message: ' + this.state.message);
        formEvent.preventDefault();
    }
  
    render() {
      return (
        <form name='contact' method='POST' data-netlify='true'>
            <input aria-label='name' name='name' placeholder='Name' required type='text' value={this.state.name} onChange={this.handleChange} />
            <input aria-label='email' name='email' placeholder='Email' required type='text' value={this.state.email} onChange={this.handleChange} />
            <textarea aria-label='message' name='message' placeholder='Message' required rows={5} value={this.state.message} onChange={this.handleChange} />
          
            <input  type='submit' className='send' value='Send' />
        </form>
      );
    }
}
