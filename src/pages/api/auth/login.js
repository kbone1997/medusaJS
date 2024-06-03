// Mock login endpoint

export default function handler(req, res)
{
    const { email, password } = req.body;

    if (email === 'user@example.com' && password === 'password')
    {
        res.status(200).json({ token: 'mock-token' });
    } else
    {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
