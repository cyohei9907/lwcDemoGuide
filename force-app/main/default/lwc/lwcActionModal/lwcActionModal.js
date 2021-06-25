import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcActionModal extends LightningElement {
    @api recordId;
    @api _isShow;
    @api _title;

    //初期化
    @api invoke()
    {
        this._isShow = true;
        this._title = "Account Detail";
    }

    //close button
    closeModal()
    {
        this._isShow = false;
    }

    //confirm button
    confirmHandle()
    {
        const event = new ShowToastEvent({
            title: 'confirm success',
            variant:'success',
        });
        this.dispatchEvent(event);
        this.closeModal();
    }

}
