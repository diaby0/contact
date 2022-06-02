import {contact} from '../domains/contact.interface';
import contactQuery from '@/query/contact.query';
export default {

    creatContact(contact: contact): void {
        try {
            const contacts: Array<contact> = contactQuery.getContacts();
            contacts.push(contact);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }
        catch(e) {
            throw new TypeError('an Error');
        }
    }
}