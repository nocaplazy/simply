import { ChangeEvent, useState } from 'react';

type onChangeEventType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

export const useForm = <T>(state: T) => {
  const [text, setText] = useState<T>(state);

  const onChangeHandler = (e: onChangeEventType) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  return {
    text,
    onChangeHandler,
  };
};
