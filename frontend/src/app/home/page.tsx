'use client';
import { useUser } from '@/app/context/UserContext';

export default function HomePage() {
  const { user } = useUser();

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          ¡Bienvenido, {user?.nombre}! Disfruta de tu lectura.
        </h1>
      </div>
    </main>
  );
}