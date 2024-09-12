import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [maxParticipants, setMaxParticipants] = useState(1);
  const [purpose, setPurpose] = useState('');
  const [meetingType, setMeetingType] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const registrationData = {
      title,
      description,
      deadline,
      maxParticipants,
      purpose,
      meetingType,
    };

    console.log('등록 정보:', registrationData);
    navigate('/mainpage');
  };

  return (
    <div style={styles.container}>
      <h2>모집 글 작성 ( 스터디 / 공모 및 대회 )</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <TextField
          label="내용"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <TextField
          label="모집 마감일"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <TextField
          label="모집 인원 수"
          type="number"
          fullWidth
          inputProps={{ min: 1 }}
          value={maxParticipants}
          onChange={(e) => setMaxParticipants(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormLabel component="legend">모임 목적</FormLabel>
          <RadioGroup
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <FormControlLabel value="스터디" control={<Radio />} label="스터디" />
            <FormControlLabel value="공모 및 대회" control={<Radio />} label="공모 및 대회" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="meeting-type-label">모임 방식</InputLabel>
          <Select
            labelId="meeting-type-label"
            id="meeting-type"
            value={meetingType}
            label="모임 방식"
            onChange={(e) => setMeetingType(e.target.value)}
            required
          >
            <MenuItem value="온라인">온라인</MenuItem>
            <MenuItem value="오프라인">오프라인</MenuItem>
            <MenuItem value="온/오프 병행">온/오프 병행</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px', fontSize: '16px' }}
        >
          등록
        </Button>
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
    gap: '20px',
  },
};