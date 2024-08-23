import clsx from 'clsx';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={clsx(s.wrapper)}>
      <p>Find contacts by name</p>
      <input
        className={clsx(s.input)}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
