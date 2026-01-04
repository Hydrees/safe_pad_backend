//Register a new user
//login user

//Algorithm to create a new user account
//Get user details from request
//Validate input (e.g check if email is valid, password strength)
//check if user already exists in the database
//Save the new user to the database
//Generate JWT token for authentication
//Return success response or error message

const registerUser = async (data) => {
    try {
        //validate user input
        const {email, password, fullname, username} = data;
        if (!username || !password) {
            throw new Error('Email and Password are required');
        }
        //check if user already exist
        const existingUser = await User.findone({email});
        if (existingUser) {
            throw new Error('User already exist');
        }
        //create new user
        const newUser = new User({email, password, fullname, username});
        await newUser.save();

        //generate JWT token
        // const token = generateToken(newUser._id);
        // return (token);
        return {message: 'User registered successfully, kindly proceed to login'};
    } catch (error) {
        return {error: error.message};
    }
}