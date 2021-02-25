// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { SkillConf } from "../../config/skill/Skill";
import LoginCommand from "../../login/LoginCommand";
import DateUtil from "../../utils/DateUtil";
import { Tools } from "../../utils/Tools";
import MapUICommand from "./MapUICommand";
import SkillIconLogic from "./SkillIconLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SkillItemLogic extends cc.Component {

   
    @property(cc.Label)
    nameLab: cc.Label = null;

    @property(cc.Node)
    icon:cc.Node = null;

    @property([cc.SpriteFrame])
    sps:cc.SpriteFrame[] = [];

    _conf: SkillConf = null;

    protected onEnable():void{
        
    }

    protected updateItem(conf:SkillConf):void{
        console.log("updateItem:", conf);
        
        this._conf = conf;
        this.nameLab.string = conf.name;
        this.icon.getComponent(SkillIconLogic).setData(conf);
    }

}
