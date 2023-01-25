

export const register = (req, res) => {
    const body = req.body;
    res.json({
        ok: 'register',
        body
    })
}

export const login = (req, res) => {
    res.json({
        ok: 'login'
    })
}