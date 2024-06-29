import { FormEvent, FormEventHandler, useRef, useState } from 'react';

export interface UseContactsControllerProps {}

export function useContactsController(props: UseContactsControllerProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  interface FormType {
    email: string;
    name: string;
  }
  interface Erros {
    name?: {
      message?: string;
    };
    email?: {
      message?: string;
    };
  }

  const [errors, setErros] = useState<Erros>();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e);

    if (nameRef?.current?.value) {
      setErros({
        name: {
          message: 'nome Obrigatório',
        },
      });
    }
  }
  return {
    handleSubmit,
    nameRef,
    errors,
  };
}
