// import { Switch as SwitchUi } from '@headlessui/react';

interface SwitchProps {
  checked: boolean;
  onChange?(checked: boolean): void;
}
export default function Switch({ checked, onChange }: SwitchProps) {
  return (
    <div className="py-2">
      {/* <SwitchUi
        checked={checked}
        onChange={onChange}
        className={`${checked ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-9 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${checked ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </SwitchUi> */}
    </div>
  );
}
