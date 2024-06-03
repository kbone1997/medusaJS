// Mock signup endpoint

export default function handler(req, res)
{
    const { email, password } = req.body;

    // Here, you'd typically save the user details to a database
    // For this mock endpoint, we'll just return a success message
    res.status(200).json({ message: 'User registered successfully' });
}
