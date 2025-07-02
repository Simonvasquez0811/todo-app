import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditTodo() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/todos/${id}`)
            .then(res => res.json())
            .then(data => setTitle(data.title))
            .catch(() => alert('Error al cargar el todo'));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, completed: false })
            });

            if (response.ok) navigate('/todos');
            else alert('Error al actualizar');
        } catch (error) {
            alert('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Editar Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>Actualizar</button>
            </form>
        </div>
    );
}

export default EditTodo;
