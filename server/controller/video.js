const Users = require("../models/User");
const Video = require("../models/Video");

exports.addVideo = async (req, res, next) => {
   // console.log(req.body)
  const newVideo = new Video({ userId: req.email.id, ...req.body });
  //console.log(newVideo)
  try {
    
    const saveVideo = await newVideo.save();
    res.status(200).json({
        message:'add video',
        saveVideo
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.send.json({ message: "update video nichts " });
    if (req.email.id === video.userId) {
      const updateVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(200).json(update);
    } else {
      res.send.json({ messahe: "update hata" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.send.json({ message: "update video nichts " });
    if (req.email.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
    }
    res.status(200).json({ message: "dfelete okey" });
  } catch (error) {
    console.log(error);
  }
};

exports.getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    console.log(error);
  }
};
exports.addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("then views okey ");
  } catch (error) {
    console.log(error);
  }
};

//mongo db aggregate kullamndinm  bir nepse kumellem gibi dudun
exports.random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{$sample:{size:40}}])
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
  }
};

//mongo db sort ozelligini kullandim en cok izlenen -1 olarqk gelir
exports.trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({views:-1})
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
  }
};
//Parametre olarak verilen asenkron işlemlerinin hepsinin bitmesini bekledikten sonra sonuç döndürmektedir.promise .all()
//flat duygun diyi olarak biye donus zapar
//sort yaparak ta enson video yu goruruz
exports.sub = async (req, res, next) => {
  try {
   const user = await Users.findById(req.email.id)
   const subscribedChannels = user.subscribedUsers
   const list = await Promise.all(
    subscribedChannels.map((channelId)=>{
        return Video.find({userId:channelId})
    })
   )
   res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt))

  } catch (error) {
    console.log(error);
  }
};

//split(",") sonucu ["js ","c"] gibi doner
exports.getByTag = async (req, res, next) => {

const tags = req.query.tags.split(",")
console.log(tags)

    try {
      const videos = await Video.find({tags:{$in:tags}}).limit(20)
      res.status(200).json(videos);
    } catch (error) {
      console.log(error);
    }
  };


  //regex mongo db ozellikleri options i kucuk buyuk farketmez
  exports.search = async (req, res, next) => {
const query = req.query.q

    try {
      const videos = await Video.find({title:{$regex :query ,$options :"i"}}).limit(40)
      res.status(200).json(videos);
    } catch (error) {
      console.log(error);
    }
  };