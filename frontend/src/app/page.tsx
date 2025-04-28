'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StudentLoginResponse } from '@/app/types/student';
import axios from 'axios';
import { useUser } from '@/app/context/UserContext';

export default function SignUp() {
  const router = useRouter();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Todos los campos son requeridos');
      return;
    }

    try {
      const response = await axios.post<StudentLoginResponse>('http://localhost:3005/api/students/login', {
        username: formData.username,
        password: formData.password,
      });

      setUser({
        nombre: response.data.nombre,
        libroFavorito: response.data.libroFavorito,
      });
  
      router.push('/home');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || error.message || 'Error al iniciar sesión';
      setError(errorMessage);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold text-center mb-6">Inicio de sesión</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        ) }

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-black">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="mt-1 block w-full text-black rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full text-black rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Continuar
          </button>
        </form>
      </div>
    </main>
  );
}