import { create } from 'zustand';

type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
};
type Actions = {
  createContact: (qty: Omit<Contact, 'id'>) => void;
  // decrement: (qty: number) => void;
};

type State = {
  contacts: Array<Contact>;
  contactSelected?: Contact;
};

export const useContact = create<State>(() => ({
  contacts: [
    {
      email: 'higor@test.com.br',
      id: Math.random(),
      name: 'Higor',
      phone: '935476745',
    },
    {
      email: 'bruno@test.com.br',
      id: Math.random(),
      name: 'Bruno',
      phone: '935476745',
    },
  ],
  contactSelected: undefined,
}));

export const useCountStore = create(() => ({
  count: 0,
  text: 'test',
}));

export const useCountActions = (): Actions => {
  return {
    createContact(contact) {
      useContact.setState((state) => ({
        contacts: [...state.contacts, { ...contact, id: Math.random() }],
      }));
    },
  };
};
