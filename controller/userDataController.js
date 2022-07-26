import userData from "../model/userDataModel";

class userDataController {
  // Menampilkan seluruh data
  static getAllUserData(req, res) {
    userData
      .find({})
      .then((userdata) => {
        res.status(200).json({ userdata });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  //   Membuat user data
  static createUserData(req, res) {
    let attr = {
      username: req.body.username,
      accountNumber: req.body.accountNumber,
      emailAddress: req.body.emailAddress,
      identityNumber: req.body.identityNumber,
    };

    let userdata = new userData(attr);
    userdata
      .save()
      .then((userdata) => {
        res.status(200).json({ userdata });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  //   Update data berdasarkan ID
  static updateUserData(req, res) {
    const id = req.params.id;
    const update = { $set: req.body };

    userData
      .findByIdAndUpdate(id, update)
      .then((userdata) => {
        res.status(200).json({ userdata });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  //   Menampilkan data berdasarkan ID
  static getUserById(req, res) {
    const id = req.params.id;

    userData
      .findById(id)
      .then((userdata) => {
        res.status(200).json({ userdata });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }

  static deleteUserData(req, res) {
    const id = req.params.id;

    userData
      .findByIdAndRemove(id)
      .then((_) => {
        res.status(200).json({ message: "Item Deleted" });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }
}

export default userDataController;
