// src/pages/RegisterPage.jsx
import { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

export default function RegisterPage() {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState('') // 存储选中的角色

  // 页面加载时自动打开对话框
  useEffect(() => {
    setOpen(true)
  }, [])

  const handleSelect = (selectedRole) => {
    setRole(selectedRole)
    setOpen(false)
    // TODO: 根据角色跳转到不同的注册表单
    // e.g. navigate(`/register/${selectedRole}`)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>请选择您的身份</DialogTitle>
        <DialogContent dividers>
          <Typography>您要以哪种身份注册？</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => handleSelect('student')}
          >
            I'm a Student
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSelect('tutor')}
          >
            我是导师
          </Button>
        </DialogActions>
      </Dialog>

      {/* 如果你想在对话框关闭后立刻显示对应的表单，可以这样条件渲染： */}
      { !open && role === 'student' && (
        <StudentRegisterForm />
      )}
      { !open && role === 'tutor' && (
        <TutorRegisterForm />
      )}
    </>
  )
}
