import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteItem } from '../../redux/operations/operations';
import { getContacts, selectorFilter } from '../../redux/selectors/selectorState';
//import { remove } from '../../redux/slices/contactsSlice';
import { UserContact } from '../userContact/UserContact';
import css from './ContactList.module.css';

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(selectorFilter);
    const dispatch = useDispatch();

    //const { items, isLoading, error } = useSelector(getTasks);

    const deleteContacts = (id) => {
        dispatch(deleteItem(id));
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contactSeach = contacts.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul> 
            {contactSeach.map(({name, phone, id}) => {
                return (
                    <li className={css.user} key={id}>
                        <UserContact name={name} number={phone} />
                        <button className={css.btn} onClick={() => {deleteContacts(id)}}>Delete</button>
                    </li>
                );
            })}
        </ul>
    )
}
