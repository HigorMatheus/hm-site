'use client';
import { Button } from '@/components/Button';
import { FormGroup } from '@/components/FormGroup';
import { Input } from '@/components/Input';

import { useContactsController } from './useContactsController';

export interface ContactsProps {}

export function Contacts(props: ContactsProps) {
  const { handleSubmit, errors, nameRef } = useContactsController({});

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="h-5/6 w-11/12 max-w-screen-2xl rounded-lg bg-zinc-400 p-4">
        <header>
          <h1>Contatos</h1>
        </header>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2 ">
          <FormGroup.Root>
            <FormGroup.Label></FormGroup.Label>

            <Input.Root>
              <Input.Control ref={nameRef} />
            </Input.Root>
            <FormGroup.Error>{errors?.name?.message}</FormGroup.Error>
          </FormGroup.Root>
          <FormGroup.Root>
            <FormGroup.Label></FormGroup.Label>
            <Input.Root>
              <Input.Control />
            </Input.Root>
            <FormGroup.Error>{errors?.email?.message}</FormGroup.Error>
          </FormGroup.Root>
          <Button>salvar</Button>
        </form>
      </div>
    </main>
  );
}
