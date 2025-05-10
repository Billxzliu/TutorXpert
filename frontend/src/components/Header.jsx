import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Dialog, DialogTitle, DialogContent, DialogActions, Slide } from '@mui/material'
import { User, UserPlus } from 'lucide-react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const navigate = useNavigate()

  const handleSelect = (role) => {
    setDialogOpen(false)
    navigate(`/register/${role}`)
  }

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-transparent text-white">
      <Link to="/" className="text-xl font-bold hover:opacity-80 transition">
        TutorXpert
      </Link>

      <nav className="space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/pricing" className="hover:underline">Pricing</a>
        <a href="/contact" className="hover:underline">Contact</a>

        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 border border-pink-400 text-pink-400 rounded-md hover:bg-pink-900/20 transition"
        >
          Login
        </button>

        <button
          onClick={() => setDialogOpen(true)}
          className="px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-md hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </nav>

      {/* Role Selection Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: { backgroundColor: '#0d0b1f' },
          className: 'text-white rounded-2xl p-6 border border-fuchsia-500 animate-breath'
        }}

      >
        <DialogTitle className="text-3xl font-extrabold text-center uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500">
          Choose Your Role
        </DialogTitle>
        <DialogContent>
          <p className="text-center text-sm text-zinc-400">
            Are you signing up as a student or a tutor?
          </p>
        </DialogContent>
        <DialogActions className="flex justify-center gap-8 pb-6">
          <button
            onClick={() => handleSelect('student')}
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition"
          >
            <User className="w-4 h-4" /> I’m a Student
          </button>

          <button
            onClick={() => handleSelect('tutor')}
            className="bg-black text-white border border-fuchsia-500 px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_10px_#f472b6] hover:scale-105 transition"
          >
            <UserPlus className="w-4 h-4" /> I’m a Tutor
          </button>
        </DialogActions>
      </Dialog>
    </header>
  )
}
