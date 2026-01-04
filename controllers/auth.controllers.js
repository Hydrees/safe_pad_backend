import authService from '../services/auth.service';

const registerUser = async (requestAnimationFrame, res) => {
    const data = req.body;
    const result = await authService.registerUser(data);
    if (result.error) {
        return res.status(400).json({error: result.error});
    }
    res.status(201).json({
        message: result.message,
    });
};

export default {registerUser};