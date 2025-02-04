import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

import { MapCityData } from "../MapCityProxy";
import { EventMgr } from '../../utils/EventMgr';
import { AudioManager } from '../../common/AudioManager';

@ccclass('RightCityItemLogic')
export default class RightCityItemLogic extends Component {
    @property(Label)
    labelInfo: Label = null;
    @property(Label)
    labelPos: Label = null;

    protected _data: MapCityData = null;


    protected onLoad(): void {
        
    }

    protected onDestroy(): void {
        this._data = null;
    }

    protected onClickBg(): void {
        AudioManager.instance.playClick();
        if (this._data) {
            EventMgr.emit("scroll_to_map", this._data.x, this._data.y);
        }
    }

    public setArmyData(data: MapCityData): void {
        this._data = data;
        if (this._data) {
            this.labelInfo.string = this._data.name;
            this.labelPos.string = "(" + this._data.x + ", " + this._data.y + ")";
        }
    }
}
