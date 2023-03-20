import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectorContactLoader } from 'redux/contacts/selector';
import { Loader } from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectorContactLoader);
  //   const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //   const addContact = contact => {
  //     setContacts(prevState => {
  //       return [contact, ...prevState];
  //     });
  //   };

  //   const deleteContact = code => {
  //     //  console.log(code);
  //     setContacts(prevState => {
  //       return prevState.filter(({ id }) => id !== code);
  //     });
  //   };
  //   const isFilterContacts = wordFilter => {
  //     //  console.log(wordFilter);
  //     setFilter(wordFilter.toLowerCase());
  //   };

  //   const contactsAfterFiltr = contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(filter);
  //   });

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loader && <Loader />}
      {/* {contactsAfterFiltr.length === 0 ? (
        <p>Not contacts</p>
      ) : ( */}
      {!loader && <ContactList />}
    </div>
  );
}
