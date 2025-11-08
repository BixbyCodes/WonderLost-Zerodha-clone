import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState('signup');
  const [form, setForm] = useState({ email: '', username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ No localhost fallback, avoids production break
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const initialMode = searchParams.get('mode');
    if (initialMode === 'login') setMode('login');
  }, [searchParams]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await fetch(`${API_URL}/login`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        const data = await res.json();
        if (!data.success) {
          setError(data.message || 'Login failed');
        } else {
          navigate('/');
        }
      } else {
        const res = await fetch(`${API_URL}/signup`, {
          method: 'POST',
          credentials: 'include',                 // ✅ send cookies
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        // ✅ success field from backend
        if (!data.success) {
          setError(data.message || 'Signup failed');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError('Network error');               // ✅ readable message
    } finally {
      setLoading(false);
    }
  };

  const switchTo = (next) => {
    setMode(next);
    navigate(`?mode=${next}`, { replace: true });
  };

  return (
    <div className="d-flex align-items-start justify-content-center py-4">
      <div className="w-100" style={{ maxWidth: 340 }}>
        <h4 className="mb-2 text-center">{mode === 'login' ? 'Login' : 'Signup'}</h4>
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control form-control-sm"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          {mode === 'signup' && (
            <div className="mb-2">
              <label className="form-label">Username</label>
              <input
                name="username"
                className="form-control form-control-sm"
                value={form.username}
                onChange={onChange}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control form-control-sm"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={loading}
          >
            {loading ? (mode === 'login' ? 'Logging in...' : 'Signing up...') : (mode === 'login' ? 'Login' : 'Sign up')}
          </button>
        </form>

        <div className="mt-3 text-center">
          {mode === 'login' ? (
            <button className="btn btn-link btn-sm" onClick={() => switchTo('signup')}>Create an account</button>
          ) : (
            <button className="btn btn-link btn-sm" onClick={() => switchTo('login')}>Already have an account? Log in</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup
