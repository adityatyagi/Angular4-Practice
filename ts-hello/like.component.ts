export class LikeComponent{
   
    constructor( private _likesCount: number,private _isSelected: boolean){

    }

    onClick(){

        this._likesCount += (this._isSelected) ? -1 : +1

        //toggle fields
        this._isSelected = !this._isSelected;
    }

    // setting the properties
    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }
}