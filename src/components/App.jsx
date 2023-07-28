import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { TitleContacts } from './App.styled';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <ContactForm />
      <TitleContacts>
        Contacts
      </TitleContacts>
      <Filter />
         {isLoading && !error && <p>Please wait!</p>}
      <ContactList />
    </div>
  );
}

export default App;