const Student = require('../models/student')


exports.show = (req, res) => {

}

exports.checkHeadStudent = async () => {
  const headStudent = await Student.findAll({
    where: {
      is_head_student: true
    }
  })

  console.log("Head student:", JSON.stringify(headStudent, null, 2));

  return headStudent
}