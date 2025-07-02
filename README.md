# 📝 Todo App - React + JSON Server

Una aplicación simple de lista de tareas (Todos) creada con **React**, usando **JSON Server** como backend simulado. Permite ver, agregar y eliminar tareas de manera interactiva.

---

## 🚀 Funcionalidades Implementadas

- 🔁 Navegación entre rutas (Inicio, Lista, Agregar Todo)
- 📄 Vista de bienvenida (Home)
- 📋 Listado de tareas con datos desde API (`/todos`)
- ➕ Formulario para agregar nuevas tareas (POST a la API)
- ❌ Eliminar tareas (DELETE a la API)
- 🔃 Actualización automática del listado después de agregar
- 📡 Comunicación con API REST simulada mediante JSON Server

---

## 🛠️ Tecnologías

- **React** (funcional components, hooks)
- **React Router DOM** para navegación
- **JSON Server** como backend fake
- **CSS** para estilos básicos

---

## 🧪 Cómo ejecutar el proyecto

1. **Clona el repositorio**  

   git clone [https://github.com/Simonvasquez0811/todo-app.git](https://github.com/Simonvasquez0811/todo-app.git)
   cd todo-app
   npm install
   npx json-server --watch db.json --port 3001
   npm start

