import { useState } from 'react';
import './styles.css';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setnote] = useState('');

  const [isError, setError] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <div>Tytuł</div>
      <div>Autor</div>
      <div>Treść</div>
      <div>Message</div>
    </div>
  );
};
