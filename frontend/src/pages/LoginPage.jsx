import { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('登录:', { email, password })
  }

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h5" gutterBottom>
        登录
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="邮箱"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="密码"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          登录
        </Button>
      </form>
    </Box>
  )
}
