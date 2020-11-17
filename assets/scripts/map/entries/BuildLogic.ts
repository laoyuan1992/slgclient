import { MapBuildData } from "../MapProxy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuildLogic extends cc.Component {

    @property(cc.SpriteAtlas)
    buildAtlas: cc.SpriteAtlas = null;

    protected _data: MapBuildData = null;

    protected onLoad(): void {

    }

    protected onDestroy(): void {

    }

    public setBuildData(data: MapBuildData): void {

    }
}