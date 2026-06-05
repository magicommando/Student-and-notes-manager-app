import { useState, useEffect } from 'react';

export default function StudentForm({ initialData, onSubmit, onCancel }) {
    const [name ,setName] = useState('')
    const [title, setTitle] = useState('')
    const [role, setRole] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
      if (initialData) {
        setName(initialData.name || '');
        setTitle(initialData.title || '');
        setRole(initialData.role || '')
        setNotes(initialData.notes || '')
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

            <label className="input-wrapper">
                Name
                <input
                 value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Type the NAME!!"
               />

               {name&& (
                <span className="clear-x" onClick={() => setName("")}>
                  ✖ 
                </span>
               )}
            </label>

            <label className="input-wrapper">
                Title
                <input
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 placeholder="e.g. Entry, Mid, Senior level"
                />

                {title&& (
                    <span className="clear-x" onClick={() => setTitle("")}>
                      ✖
                    </span>
                )}
            </label>

            <label className="input-wrapper">
                Role
                <input
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="e.g Assistant, instructor, Mentor"
                />
                {role&& (
                    <span className="clear-x" onClick={() => setRole("")}>
                      ✖
                    </span>
                )}
            </label>

            <label className="textarea-wrapper">
  Notes
  <textarea
    value={notes}
    onChange={e => setNotes(e.target.value)}
    placeholder="Write notes here..."
  />

  {notes && (
    <span className="clear-x textarea-clear" onClick={() => setNotes("")}>
      ✖
    </span>
  )}
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