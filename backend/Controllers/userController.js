
const user = require("../Models/userModel.js");

const mongoose = require("mongoose"); 

//untuk mengambil semua data user
const getsemuauser = async (req,res)=>{
    try{
         const user = await User.find({})
       if(!user){
       res.status(404).json({status:"404, tidak ada user"})
        }
        res.status(200).json(user) 
    }catch(err){
      res.status(400).json({message:err.message})       
    }
};

const tambahuser = async (req, res) => {
	const { username, password, name, ProfilePicture } = req.body;

	try {
		const addBuku = await Buku.create({
			judul,
			penulis,
			penerbit,
			harga,
			stok,
		});
		res.status(200).json(addBuku);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};


module.exports ={
  getsemuauser 
}
