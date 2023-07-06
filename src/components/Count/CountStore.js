// store
import {observable, action, computed, makeObservable} from "mobx";

class CountStore {
    constructor() {
      makeObservable(this);
    }
    @observable a = 1;
    b = 2; // 注意此处b为普通属性，这种属性只要没有【被观测属性】发生改变，是不会被观测到改变的！

    @action  // 注意如果使用普通函数，则必须写成：@action.bound，函数中的this才可以正确指向
    add = () => {
        this.a++; // 如果下面一行注释掉，则a被正常观测
        this.b++; // 如果上面一行注释掉，则b无法被观测
    };

    @computed get ab() {
        return this.a + this.b;
    }
}

export const countStore = new CountStore();
