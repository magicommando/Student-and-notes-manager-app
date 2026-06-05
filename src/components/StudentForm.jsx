import { useState, useEffect } from 'react';

export default function StudentForm({ initialData, onSubmit, onCancel }) {
    const [name ,setname] = useState('')
    const [title, setName] = useState('')
    const [role, setRole] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
      if (initialData) {
        setName(initialData.name || '');
        setTitle(initialData.title ||'');
        setRole(initialData.role || '')
        setNotes(initialData.notes ||'')
      } else{
        setName('')
        setTitle('')
        setRole('')
        setNotes('')
      }
    }, [initialData]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name.trim()) return;

        onSubmit({
          id: initialData?.id,
          name: name.trim(),
          title: title.trim(),
          role: role.trim(),
          notes: notes.trim()
        });
    };

    return (
        <form className="student-form" onSubmit={handleSubmit}>
            <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>

            <label>
                Name
                <input
                 value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="student name"
               />
            </label>

            <label>
                title
                <input
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 placeholder="e.g. Freshman, Senior"
                />
            </label>

            <label>
                Role
                <input
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="e.g Class Rep, Tutor"
                />
            </label>

            <label>
                Notes
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Quick notes about this student"
                />
            </label>

            <div className="form-actions">
                <button type="submit">
                    {initialData ? 'Update' : 'Add'}
                </button>
                {initialData && (
                  <button type="button" onClick={onCancel}>
                    Cancel
                  </button>
                )}
            </div>
        </form>
    );
}