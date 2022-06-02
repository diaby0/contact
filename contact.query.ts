import { contact } from "@/domains/contact.interface";

export default {
    getContacts(): Array<contact> {
        const contacts = localStorage.getItem('contact') as string;
        const parsedContacts = JSON.parse(contacts);
        if(this.isContactListEmply(parsedContacts)) {
            return [];
        }
        return parsedContacts;
    },
            
         isContactListEmply(contactList: Array<contact>): boolean {
            if(contactList) {
                return false
            }
            return true;
         }   
            
}

  
     
    

