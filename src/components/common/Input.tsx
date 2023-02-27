import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface PropsType {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  placeholder: string;
  type?: 'number' | 'text';
}

export const Input = (props: PropsType) => <_Wrapper {...props} />;

const _Wrapper = styled.input`
  /* width: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: none;
  caret-color: white;
  font-weight: 500;
  line-height: normal;
  outline: none;
  text-align: center; */
  width: 670px;
  height: 51px;
  font-size: 2rem;
  border: none;
  background: none;
  border-bottom: 1px solid white;
`;

interface PropsTypee {
  state: { grade: number; class: number };
  setState: React.Dispatch<
    React.SetStateAction<{ grade: number; class: number }>
  >;
  name: 'grade' | 'class';
  placeholder: string;
}

export const QuantityInput = ({
  placeholder,
  state,
  setState,
  name,
}: PropsTypee) => {
  return (
    <_Input>
      <button onClick={() => setState({ ...state, [name]: state[name] - 1 })}>
        -
      </button>
      <div>
        {state[name]}
        {placeholder}
      </div>
      <button onClick={() => setState({ ...state, [name]: state[name] + 1 })}>
        +
      </button>
    </_Input>
  );
};

const _Input = styled.div`
  display: flex;
`;
