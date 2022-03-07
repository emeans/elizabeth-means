import React from 'react';
import './contact-form.scss';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + ' with email: ' + this.state.email + ' and message: ' + this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <form name='contact' method='POST' data-netlify='true'>
            <input aria-label='name' name='name' placeholder='Name' type='text' value={this.state.name} onChange={this.handleChange} />
            <input aria-label='email' name='email' placeholder='Email' type='text' value={this.state.email} onChange={this.handleChange} />
            <textarea aria-label='message' name='message' placeholder='Message' type='text' rows='5' value={this.state.message} onChange={this.handleChange} />
          
            <input type='submit' className='send' value='Send' />
        </form>
      );
    }
  }
  