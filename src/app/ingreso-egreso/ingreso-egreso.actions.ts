//Redux
import { Action } from '@ngrx/store';

//app
import { IngresoEgresoModel } from './ingreso-egreso.model';

export const SET_ITEMS = '[Ingreso Egreso] Set items';
export const UNSET_ITEMS = '[Ingreso Egreso] Unset items';

export class SetItemsAction implements Action {
    readonly type = SET_ITEMS;
    
    constructor(public items: IngresoEgresoModel[]) {}
}

export class UnsetItemsAction implements Action {
    readonly type = UNSET_ITEMS;
}

export type acciones = SetItemsAction | UnsetItemsAction;