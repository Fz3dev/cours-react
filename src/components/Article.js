import React from 'react'
import axios from 'axios'

function Article({article}) {

    const [isEditing, setIsEditing] = React.useState(false);
    const [editContent, setEditContent] = React.useState(article.content);

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };

        axios.put(`http://localhost:3004/articles/` + article.id, data).then(() => {
        setIsEditing(false);
    });
};

    const handleDelete = () => {
        axios.delete(`http://localhost:3004/articles/` + article.id);
        window.location.reload();
    };

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            });
            return newDate;
    };

  return (
    <div className="article" style={{ background: isEditing ? "yellow" : "white" }}>
      <div className="card-header">
        <h3> {article.author} </h3>
        <em> Posté le {dateFormater(article.date)} </em>
      </div>
       
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          onChange={(e) => setEditContent(e.target.value)}></textarea>
      ) : (
        <p> {editContent ? editContent : article.content} </p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={()=> {
            if(window.confirm("Voulez-vous supprimer cet article ?")) {
                handleDelete();
            }
        }}>Supprimer</button>
      </div>
    </div>
  );
}

export default Article