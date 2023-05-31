import Users from "../model/user";

//get endpoint: http://localhost:3000/api/users

export async function getUsers(req, res) {
  try {
    const users = Users.find({});

    if (!users) {
      return res.status(404).json({ error: "Data not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ error: "Error while fetching data" });
  }
}

//post endpoint: http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

//put method: http://localhost:3000/api/users/1
export async function putUSer(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData);
      return res.status(200).json(formData);
    }
    return res.status(404).json({ error: "User not selected!" });
  } catch (error) {
    return res.status(404).json({ error: "Error while updating the data" });
  }
}
