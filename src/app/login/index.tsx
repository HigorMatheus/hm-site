import { Button } from '../../components/Button';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 ">
      <form
        className="flex flex-col gap-2 p-2 rounded-lg w-80 bg-zinc-600"
        action=""
      >
        <input
          type="email"
          className="h-10 p-1 px-2 text-sm rounded-sm bg-zinc-900 "
        />
        <input
          type="password"
          className="p-1 text-sm rounded-sm bg-zinc-600 text-zinc-300 "
        />
        <Button type="submit">enviar</Button>
      </form>
    </div>
  );
}
