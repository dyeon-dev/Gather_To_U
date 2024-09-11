import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../styles/theme'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function RegisterPage() {
  const [generation, setGeneration] = React.useState('')
  const [group, setGroup] = React.useState('')

  const handleGenerationChange = event => {
    setGeneration(event.target.value)
  }
  const handleGroupChange = event => {
    setGroup(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="이름"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                  <InputLabel id="demo-select-small-label">유레카 기수</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={generation}
                    label="유레카 기수"
                    onChange={handleGenerationChange}
                  >
                    <MenuItem value={10}>1기</MenuItem>
                    <MenuItem value={20}>2기</MenuItem>
                    <MenuItem value={30}>3기</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                  <InputLabel id="demo-select-small-label">클래스</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={group}
                    label="클래스"
                    onChange={handleGroupChange}
                  >
                    <MenuItem value={10}>프론트 대면</MenuItem>
                    <MenuItem value={20}>프론트 비대면</MenuItem>
                    <MenuItem value={30}>백엔드 대면</MenuItem>
                    <MenuItem value={30}>백엔드 비대면</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
