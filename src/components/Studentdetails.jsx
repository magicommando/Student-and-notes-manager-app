import { useState, useEffect } from 'react';

export default function StudentDetails({student, onUpdateNotes}) {
    const [draftNotes, setDraftNotes] = useState('')

    useEffect(() => {
      setDraftNotes(student?.notes || '');
    }, [student]);

    if (!student) {
        return <div className="student-details">Details on the chosen Student.</div>;
    }

    const handleSaveNotes = () => {
        onUpdateNotes(student.id, draftNotes);
    };

    return (
        <div className="student-details">
            <h2>{student.name}</h2>
            <p><strong>Title:</strong> {student.title || '-'}</p>
            <p><strong>Role</strong> {student.role || '-'}</p>

            <h3>Notes</h3>
            <textarea
              value={draftNotes}
              onChange={e => setDraftNotes(e.target.value)}
              rows={8}
            />
            <button onClick={handleSaveNotes}>Save Notes</button>

            <p className="meta">
                <small>
                    Created: {new Date(student.createdAt).toLocaleString()}<br />
                    Updated: {new Date(student.updatedAt).toLocaleString()}
                </small>
            </p>
        </div>
    );
}