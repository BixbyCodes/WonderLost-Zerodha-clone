import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...form })
      });
      const data = await res.json();
      if (!res.ok || data.success !== true) {
        setError(data.message || 'Signup failed');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-start justify-content-center py-4">
      <div className="w-100" style={{ maxWidth: 340 }}>
        <h4 className="mb-2 text-center">Signup</h4>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control form-control-sm" value={form.email} onChange={onChange} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Username</label>
          <input name="username" className="form-control form-control-sm" value={form.username} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input name="password" type="password" className="form-control form-control-sm" value={form.password} onChange={onChange} required />
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <button type="submit" className="btn btn-primary btn-sm" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
      </div>
    </div>
  )
}

export default Signup
