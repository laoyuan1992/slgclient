import ArmyLogic from "./entries/ArmyLogic";
import MapCommand from "./MapCommand";
import MapEntryLayerLogic from "./MapEntryLayerLogic";
import MapProxy, { MapConfig } from "./MapProxy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MapArmyLogic extends MapEntryLayerLogic {

    protected onLoad(): void {
        super.onLoad();
    }

    protected onDestroy(): void {
        super.onDestroy();
    }

    protected onTouchMap(mapPoint: cc.Vec2, worldPixelPoint: cc.Vec2):void {
        // let guid: number = this.tiledMap.getLayer("ground").getTileGIDAt(mapPoint);
        // console.log("onTouchMap guid ", guid);
        // if (guid > 0) {
        //     //不可行走区域
        //     console.log("不可行走区域 山或者水(" + mapPoint.x + " , " + mapPoint.y + ")");
        // } else {
        //     console.log("可行走区域(" + mapPoint.x + " , " + mapPoint.y + ")");
        // }
    }
}