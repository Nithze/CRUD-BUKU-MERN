const mongoose = require("mongoose");

const Schema = mongoose.Schema; 
const TransaksiSchema = New Schema(
    {
        userID:{
            
        },
        barangID:{

        },
        tanggal_pinjam:{
            type: Date,
            require: true,
        },
        tanggal_balik:{
            type: Date,
            require: true,
        },
        total:{
            type: Number,
            require: true,
        },
        kembalian:{
            type:Number,
            require:true,
        }
    }
);
module.exports = mongoose.model("Transaksi", TransaksiSchema);
