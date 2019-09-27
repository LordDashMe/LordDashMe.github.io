import React, { Component } from 'react';

import style from './ContactForm.module.scss';

interface IProperty {}

interface IState {
  contact: IContact
}

interface IContact {
  name: string;
  email: string;
  message: string;
}

export default class ContactForm extends Component<IProperty, IState> {

  private static readonly API_CONTACT: string = 'https://lorddashme-github-io-backend.herokuapp.com/contact';

  public constructor(properties: any) {
    
    super(properties);
    this.state = {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  }

  private onSubmitFormHandler(): void {
    
    fetch(ContactForm.API_CONTACT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json', 
        'X-LORDDASHME-HEADER': '1'
      },
      body: JSON.stringify(this.state.contact)
    }).then((response) => {
      
      if (response.status === 200) {
        alert('Message sent! I will reply as soon as I receive the message. Thanks!');
        window.location.reload();
        return
      }

      response.json().then((data) => {
        alert(data.message);
        console.error(data.message);
      });
    });
  }

  private handleFieldChange(key: string, event: any): void {
    
    let contact = this.state.contact;
    
    if (key === 'name') {
      contact.name = event.target.value;
    }
    if (key === 'email') {
      contact.email = event.target.value;
    }
    if (key === 'message') {
      contact.message = event.target.value;
    }

    const state = {...this.state};
    
    state['contact'] = contact;

    this.setState(state);
  }

  public render(): JSX.Element {
    
    return (
      <div className={style['container']}>
        <form className={style['form']}>
          <div className={style['field'] + ' form-group'}>
            <label className={style['label']}>NAME</label>
            <input value={this.state.contact.name} onChange={this.handleFieldChange.bind(this, 'name')} className={style['control'] + ' form-control'} type="text" placeholder="John Doe" />
          </div>
          <div className={style['field'] + ' form-group'}>
            <label className={style['label']}>EMAIL</label>
            <input value={this.state.contact.email} onChange={this.handleFieldChange.bind(this, 'email')} className={style['control'] + ' form-control'} type="text" placeholder="john.doe@example.com" />
          </div>
          <div className={style['field'] + ' form-group'}>
            <label className={style['label']}>MESSAGE</label>
            <textarea value={this.state.contact.message} onChange={this.handleFieldChange.bind(this, 'message')} className={style['textarea'] + ' ' + style['control'] + ' form-control'} placeholder="Say something..."></textarea>
          </div>
          <button className={style['button'] + ' btn'} type="button" onClick={this.onSubmitFormHandler.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}