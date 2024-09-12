import React, { useState } from 'react';

export default function NewPostPagemok() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState(''); 
  const [maxParticipants, setMaxParticipants] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const registrationData = {
      title,
      description,
      date,
      location,
      maxParticipants,
    };

    console.log('등록 정보:', registrationData);
  };

  return (
    <div style={styles.container}>
      <h2>모집 글 작성 ( 모각코 ) </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>내용</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="date" style={styles.label}>날짜</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={styles.smallInput}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>장소</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            style={styles.smallInput}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="maxParticipants" style={styles.label}>모집 인원 수</label>
          <input
            type="number"
            id="maxParticipants"
            value={maxParticipants}
            min="1"
            onChange={(e) => setMaxParticipants(e.target.value)}
            required
            style={styles.smallInput}
          />
        </div>

        <button type="submit" style={styles.button}>등록</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'flex-start',
    gap : '10px',
  },
  label: {
    fontSize: '16px',
    flexBasis: '30%',
    margin: '0', 
  },
  input: {
    flexBasis: '60%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  smallInput: {
    flexBasis: '20%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  textarea: {
    flexBasis: '60%',
    padding: '8px',
    fontSize: '16px',
    height: '100px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none', 
  },
  button: {
    padding: '10px 50px',
    backgroundColor: '#fff',
    color: '#E80080',
    border: '2px solid #E80080',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    alignSelf: 'center',
  },
};