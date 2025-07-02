import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
    // Estado del formulario
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!title.trim()) {
            alert('Por favor escribe un título');
            return;
        }

        setLoading(true);

        try {
            // Llamada a la API
            const response = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title.trim(),
                    completed: false
                }),
            });

            if (response.ok) {
                // Redirigir a la lista
                navigate('/todos');
            } else {
                alert('Error al crear el todo');
            }
        } catch (error) {
            alert('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

}

export default AddTodo;
