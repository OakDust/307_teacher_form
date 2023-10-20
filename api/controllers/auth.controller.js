const Professor = require('../models/professor')
const Student = require('../models/student')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const generateAccessToken = (id) => {
    const payload = {
        id
    }

    return jwt.sign(payload, process.env.AUTH_SECRET, {expiresIn: '24h'})
}

exports.professorAuth = async (req, res, next) => {
    const professor = await Professor.findOne({
        where: {
            p_email: req.body.email
        }
    })

    if (!professor) {
        res.status(400).send('register first')
        return
    } 

    const validPasswordProfessor = bcrypt.compareSync(req.body.password, professor.p_password); 

    if (!validPasswordProfessor) {
        res.status(400).send('password not valid')
        return
    }

    const token = generateAccessToken(professor.p_id)

    res.send(token)
}

exports.studentAuth = async (req, res, next) => {
    console.log(req.body)
    const student = await Student.findOne({
        where: {
            s_email: req.body.email
        }
    })

    if (!student) {
        await res.status(400).json({message: "not registered"})
        return
    } 

    const validPasswordStudent = bcrypt.compareSync(req.body.password, student.s_password); 

    if (!validPasswordStudent) {
        // res.set({okay: "password is wrond"})
        await res.json({message: "password is wrong"})
        return
    } 

    const token = await generateAccessToken(student.s_id)

    await res.json({message: token})
}