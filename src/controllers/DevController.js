const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
  async store(req, res) {
    console.log(req.body);

    const { github_username, techs, latitude, longitude } = req.body;

    //procura se o dev a ser cadastrado já existe
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      //console.log(apiResponse.data);

      // se o name não existir o valor padrão será o login
      const { name = login, avatar_url, bio } = apiResponse.data;

      // criar array de tecnologias e retirar espaços
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
      //criando um Dev na base
      dev = await Dev.create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });

      console.log(name, avatar_url, bio);
    }

    return res.json(dev);
  }
};
